interface UserProps {
  name: string;
  age: number;
}

type Callback = () => void;

export class User {
  private data: UserProps;
  private events: { [key: string]: Callback[] } = {};

  constructor(data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
  }

  on(eventName: string, callback: Callback): void {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      const handlers: Callback[] = [callback];
      this.events[eventName] = handlers;
    }
  }

  trigger(eventName: string): void {
    if (!this.events[eventName] || this.events[eventName].length === 0) {
      return;
    }

    for (const callback of this.events[eventName]) {
      callback();
    }
  }
}

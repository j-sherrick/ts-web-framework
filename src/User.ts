interface UserProps {
  name: string;
  age: number;
}

export class User {
  private data: UserProps;

  constructor(data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(props: UserProps): void {
    Object.assign(this.data, props);
  }
}

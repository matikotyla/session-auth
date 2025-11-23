export namespace AuthType {
  export namespace Form {
    export type Register = {
      email: string;
      name: string;
      password: string;
    };
  }

  export namespace Request {
    export type Register = {
      email: string;
      name: string;
      password: string;
    };
  }

  export namespace Response {
    export type Register = {
      id: string;
    };
  }
}

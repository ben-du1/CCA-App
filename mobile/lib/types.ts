export interface office_hours {
    day: string;
    time: string;
}
export interface teacher {
    name: string;
    coordinate: Array<number>;
    floor: number;
    room: string;
    officeHours: Array<office_hours>;
    department: "English"|"Science"|"CTE"|"Math"|"";
    classes: Array<string>;
}
export const blankTeacher: teacher = {
  name: "unknown",
  coordinate: [0, 0],
  floor: -1,
  room: "",
  officeHours: [],
  department: "",
  classes: [],
};
export interface PostConstructorOptions {
  title: string;
  content: string;
  image?: string; // URL
  date: number;

  author: string;
}

export class Post {
  title: string;
  content: string;
  image?: string; // URL
  date: number;
  author: string;

  constructor(options: PostConstructorOptions) {
    this.title = options.title;
    this.content = options.content;
    this.image = options.image;
    this.date = options.date;
    this.author = options.author;
  }
}
export const blankPost: Post = new Post({title: "", content: "", date: 0, author: ""});
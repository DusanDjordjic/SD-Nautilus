import { Command } from './command.model';

export class Package {
  id: string;
  name: string;
  commands: Command[];
  description: string;
  price: number;
  link: string;
  constructor(obj?: any) {
    this.id = (obj && obj.id) || '';
    this.name = (obj && obj.name) || '';
    this.commands =
      (obj &&
        obj.commands &&
        obj.commands.map((command: any) => new Command(command))) ||
      [];
    this.description = (obj && obj.description) || '';
    this.price = (obj && obj.price) || 0;
    this.link = (obj && obj.link) || '';
  }
  get commandsCount() {
    return this.commands.length;
  }
}

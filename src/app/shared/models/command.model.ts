export class Command {
  id: string;
  name: string;
  link: string;
  description: string;
  packageId: string;
  constructor(obj?: any) {
    this.id = (obj && obj.id) || '';
    this.name = (obj && obj.name) || '';
    this.link = (obj && obj.link) || '';
    this.description = (obj && obj.description) || '';
    this.packageId = (obj && obj.packageId) || '';
  }
}

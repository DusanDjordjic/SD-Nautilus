import { Injectable } from '@angular/core';
import { Package } from '../shared/models/package.model';

const packages: Package[] = [
  new Package({
    id: '1',
    name: '2D',
    link: '2d',
    commands: [
      {
        id: '1',
        name: 'Get dot projection on a line',
        link: 'get-dot-projection-on-a-line',
        description: 'Makes dot projection on a given line',
      },
      {
        id: '2',
        name: 'Get line length',
        link: 'get-line-length',
        description: 'Calculates lenght of any line in space',
      },
      {
        id: '3',
        name: 'Get line projection on other line',
        link: 'get-line-projection-on-other-line',
        description: 'Makes projection of a line on another line',
      },
    ],
    price: 100,
    description: 'Package for 2D modeling in rhinoceros 5, 6, 7',
  }),
  new Package({
    id: '2',
    name: '3D',
    link: '3d',
    commands: [
      {
        id: '1',
        name: 'Get bounding box volume',
        link: 'get-bouding-box-volume',
        description:
          'Calculates minimum volume of a described box around given object',
      },
      {
        id: '2',
        name: 'Get projectons',
        link: 'get-projection',
        description: 'Makes projections of an object',
      },
    ],
    price: 150,
    description: 'Package for 3D modeling in rhinoceros 5, 6, 7',
  }),
  new Package({
    id: '3',
    name: 'Waterfront',
    link: 'waterfront',
    commands: [
      {
        id: '1',
        name: 'Calculate presure',
        link: 'calculate-presure',
        description:
          'Calculates presure that ship will experience when it moves certain speed',
      },
      {
        id: '2',
        name: 'Calculate best shape',
        link: 'calculate-best-shape',
        description:
          'Calculates shape for ship to have so that it moves through water with minimal losses',
      },
    ],
    price: 170,
    description: 'Package for waterfront modeling in rhinoceros 5, 6, 7',
  }),
  new Package({
    id: '4',
    name: '3D to 2D',
    link: '3d-to-2d',
    commands: [
      {
        id: '1',
        name: 'Get projections',
        link: 'get-projections',
        description: 'Makes all three projections of an object',
      },
      {
        id: '2',
        name: 'Split object',
        link: 'split-object',
        description:
          'Splits object from 3D to 2D plane. Also packs the fragmets in the best possible way on the given size plane',
      },
    ],
    price: 320,
    description:
      'Package for converting 3D model to 2D planes in rhinoceros 5, 6, 7',
  }),
];
@Injectable()
export class PackageService {
  getAllPackages(): Package[] {
    return packages;
  }
  getPackageByLink(link: string): Package | undefined {
    return packages.find((singlePackage) => singlePackage.link == link);
  }
}

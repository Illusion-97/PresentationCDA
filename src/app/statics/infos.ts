import {Topic} from "./topic";
import {Routes} from "@angular/router";
import {
  CONCEP_EX,
  CONTEXT_EX,
  ENV_EX,
  Exemple,
  FUNC_EX,
  MAQUE_EX,
  RECH_EX,
  SPEC_EX,
  SUMMARY_EX,
  SYNTH_EX,
  TEST_EX,
  TOP10_EX,
} from "./exemples";
import {ExerciceComponent} from "../pages/exercice/exercice.component";

export interface Info {
  route: string,
  title: string,
  icon?: string,
  exemple?: Exemple[],
}

export class Infos {
  private static topicsInfos: Map<Topic, Info> = new Map<Topic, Info>([
    [
      Topic.SUMMARY,
      {
        title: 'Project Summary',
        icon: 'fa-solid fa-language',
        route: 'summary',
        exemple: SUMMARY_EX
      }
    ],
    [
      Topic.CONTEXT,
      {
        title: 'Contexte du Projet',
        icon: 'fa-solid fa-diagram-project',
        route: 'context',
        exemple: CONTEXT_EX
      }
    ],
    [
      Topic.ENV,
      {
        title: 'Environnement',
        icon: 'fa-solid fa-trowel-bricks',
        route: 'environment',
        exemple: ENV_EX
      }
    ],
    [
      Topic.SPEC,
      {
        title: 'Spécifications',
        icon: 'fa-solid fa-spell-check',
        route: 'specs',
        exemple: SPEC_EX
      }
    ],
    [
      Topic.MAQUE,
      {
        title: 'Maquettes',
        icon: 'fa-solid fa-pen-ruler',
        route: 'maquettes',
        exemple: MAQUE_EX
      }
    ],
    [
      Topic.CONCEPTION,
      {
        title: 'Conception',
        icon: 'fa-solid fa-compass-drafting',
        route: 'database',
        exemple: CONCEP_EX
      }
    ],
    [
      Topic.CODE,
      {
        title: 'Codage',
        icon: 'fa-solid fa-code',
        route: 'code',
        exemple: TOP10_EX
      }
    ],
    [
      Topic.FUNC,
      {
        title: 'Interface',
        icon: 'fa-solid fa-desktop',
        route: 'interface',
        exemple: FUNC_EX
      }
    ],
    [
      Topic.TEST,
      {
        title: 'Test',
        icon: 'fa-solid fa-stethoscope',
        route: 'test',
        exemple: TEST_EX
      }
    ],
    [
      Topic.RECHERCHE,
      {
        title: 'Recherche',
        icon: 'fa-solid fa-globe',
        route: 'tinymce',
        exemple: RECH_EX
      }
    ],
    [
      Topic.SYNTHESE,
      {
        title: 'Conclusion',
        icon: 'fa-solid fa-user-check',
        route: 'conclusion',
        exemple: SYNTH_EX
      }
    ]
  ]);

  static getValues(): Info[] {
    return Array.from(this.topicsInfos.values())
  }

  static getRoutes(): Routes {
    const routes: Routes = []
    for (let [topic, info] of this.topicsInfos.entries()) {
      routes.push({
        path: info.route,
        component: ExerciceComponent,
        data: {topic: topic}
      })
    }
    return routes;
  }

  static getInfo(topic: Topic): Info | undefined {
    return this.topicsInfos.get(topic)
  }

  static has(topic: Topic): boolean {
    return this.topicsInfos.has(topic);
  }

  static getTitle(topic: Topic) {
    return this.getInfo(topic)?.title || 'Unknown Topic'
  }
}

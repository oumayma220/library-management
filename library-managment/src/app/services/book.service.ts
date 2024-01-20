import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {books, PageBook} from "../model/books.model";
import {UUID} from "angular2-uuid";
import {ValidationErrors} from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
private books!:Array<books>;
  constructor() {
    this.books= [
      {id:UUID.UUID(),title:"le livre de java",status:true,picture:"../../assets/Livre-programmation-java.jpg",descri:"Cet ouvrage met en avant toutes les connaissances nécessaires pour commencer dans le domaine du langage le plus couramment utilisé en programmation : JavaScript."},
      {id:UUID.UUID(),title:"S'initier à la programmation",status:false,picture:"../../assets/initialiser.jpg",descri:"Acquérir rapidement une parfaite maîtrise des techniques de programmation et savoir s’adapter facilement à tout nouveau langage Conçu pour les débutants en programmation"},
      {id:UUID.UUID(),title:"Programmation linux",status:true,picture:"../../assets/linux.jpg",descri:"cet ouvrage vous conduira rapidement à une bonne maîtrise des différents aspects de la programmation Linux, de l'écriture de scripts shell à la programmation Internet, en passant par la construction d'interfaces graphiques X Window ou Gnome"},
      {id:UUID.UUID(),title:"Programmer en LANGUAGE C",status:false,picture:"../../assets/programmerenc.jpg",descri:"Cet ouvrage est destiné aux étudiants débutants en langage C, mais ayant déjà quelques notions de programmation acquises par la pratique, même sommaire, d'un autre langage.."},
      {id:UUID.UUID(),title:"Programmer en LANGUAGE c++",status:false,picture:"../../assets/c++.jpg",descri:"Vous aimeriez apprendre à programmer en C++ et vous cherchez un cours accessible aux débutants ? Cet ouvrage est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir le langage C++."},
      {id:UUID.UUID(),title:"Programmer en LANGUAGE c++",status:false,picture:"../../assets/2212121350.08.LZZZZZZZ.jpg",descri:"Il s'adresse aussi bien aux étudiants en programmation qu'aux développeurs professionnels souhaitant se former à ce langage ou en approfondir la maîtrise."},
      {id:UUID.UUID(),title:"Angular",status:false,picture:"../../assets/angular.jpg",descri:"Ce livre de la collection vBook se compose d'un livre de référence sur Angular en version 8 pour maîtriser le développement d’applications web avec le framework JavaScript de Google et d’un approfondissement sous forme de vidéo sur la gestion du routing pour mettre en place la navigation d'une application web."},
      {id:UUID.UUID(),title:"Algorithmique",status:false,picture:"../../assets/download.jpg",descri:"Ce livre de cours traduit de l'américain, sans équivalent et d'accès facile, est une introduction complète à l'algorithmique et s'adresse aussi bien aux étudiants qu'aux professionnels en informatique."},
      {id:UUID.UUID(),title:"Traitement des signaux et acquisation de données",status:false,picture:"../../assets/images.jpg",descri:"Ce livre de cours traduit de l'américain, sans équivalent et d'accès facile, est une introduction complète à l'algorithmique et s'adresse aussi bien aux étudiants qu'aux professionnels en informatique."},
      {id:UUID.UUID(),title:"électronique",status:false,picture:"../../assets/12.png",descri:"L'électronique est la discipline qui s'intéresse aux dispositifs électriques construits autour de la technologie des semi-conducteurs. La plupart du temps, les courants et les tensions mis en œuvre restent de faible amplitude, excepté  en électronique de puissance"},
      {id:UUID.UUID(),title:"Électronique analogique",status:false,picture:"../../assets/007715783.jpg",descri:"Ne nécessitant qu'une formation en mathématiques de niveau baccalauréat, l'ouvrage introduit, aussi simplement que possible, les notions de base de l'électronique analogique linéaire basse fréquence."},
      {id:UUID.UUID(),title:"Microcontrôleurs PIC : programmation en Basic",status:false,picture:"../../assets/microprocesseur.jpg",descri:"Cet ouvrage aborde tous les aspects, théoriques et pratiques, de la programmation en Basic des microcontrôleurs PIC. Il propose : une présentation comparative des principaux compilateurs Basic pour PIC du marché."},
      {id:UUID.UUID(),title:"Electronique de puissance",status:false,picture:"../../assets/electpuissance.jpg",descri:"Ce cours complet d'électronique de puissance propose une approche pratique et descriptive, associée à un exposé progressif et détaillé du cours. Il accompagnera le lecteur, depuis l'apprentissage des notions et des mécaniques de basede l'électronique de commutation jusqu'à l'étude complète de systèmes réels."},
      {id:UUID.UUID(),title:"Signaux et systèmes à temps continu et discret",status:false,picture:"../../assets/syst.jpg",descri:"Cet ouvrage présente les concepts de base mis en œuvre dans les systèmes asservis linéaires à temps continu et discret : notions de boucle fermée, comportement des systèmes bouclés, identification et commande de systèmes bouclés."},
      {id:UUID.UUID(),title:"Automatique des systèmes échantillonnés",status:false,picture:"../../assets/aaa.jpg",descri:"Cet ouvrage présente les aspects fondamentaux relatifs à la modélisation, l'analyse et la commande des processus continus à commande échantillonnée."},
      {id:UUID.UUID(),title:"Automatique de base",status:false,picture:"../../assets/imagesf.jfif",descri:"Ce cours d'automatique est spécialement destiné aux étudiants scientifiques du second cycle, et concerne notamment ceux qui sont engagés dans des études d'ingénieur. "},
      {id:UUID.UUID(),title:"Automatique appliquée",status:false,picture:"../../assets/dodo.jpg",descri:"l'automatique est désormais accessible aux ingénieurs généralistes grâce à la pratique industrielle de la simulation, à l'approche systémique, aux boîtes à outils logicielles et aux moyens de calcul embarqués."},
      {id:UUID.UUID(),title:"Automatique industrielle en 20 fiches",status:false,picture:"../../assets/indus.jpg",descri:"Conçue pour faciliter aussi bien l’apprentissage que la révision, la collection « EXPRESS » vous propose une présentation simple et concise de l’Automatique industrielle en 20 fiches pédagogiques."},
      {id:UUID.UUID(),title:"Le grand guide des systèmes de contrôle commande industriels",status:false,picture:"../../assets/couv.jpg",descri:"Cet ouvrage présente les concepts de base mis en œuvre dans les systèmes asservis linéaires à temps continu et discret : notions de boucle fermée, comportement des systèmes bouclés, identification et commande de systèmes bouclés."},
      {id:UUID.UUID(),title:"Réseaux",status:false,picture:"../../assets/res.jpg",descri:"L'ouvrage de référence sur les réseaux, entièrement mis à jour pour inclure les technologies incontournables de demain."},
      {id:UUID.UUID(),title:"Tout sur les réseaux et Internet",status:false,picture:"../../assets/OO.jpg",descri:"Cet ouvrage présente les différentes notions à connaître pour être en mesure de mettre en place, de gérer, de sécuriser et de dépanner un réseau, indépendamment du système d’exploitation utilisé (Windows, macOS ou Linux)."},
      {id:UUID.UUID(),title:"MIPS Assembly Language Programming",status:false,picture:"../../assets/mips.jpg",descri:"Les étudiants utilisant ce texte comprendront comment les composants fonctionnels des ordinateurs modernes sont assemblés et comment un ordinateur fonctionne au niveau du langage machine."},
      {id:UUID.UUID(),title:"systemes a microprocesseur",status:false,picture:"../../assets/largepreview.png",descri:"Dans ce cours, les structures logiques séquentielles sont présentées dans la première partie. Ces structures sont composées d’élements logiques faisant intervenir la notion de mémoire et d’etats précédents pour provoquer le changement d’´etat de sortie de la structure"},
      {id:UUID.UUID(),title:"Le Microprocesseur 1",status:false,picture:"../../assets/Le-microprocesseur-1.jpg",descri:"Le microprocesseur 1 traite des deux premières générations de microprocesseurs, c’est-à-dire celles qui manipulent les entiers aux formats de 4 et 8 bits. Ce volume présente la fonction de calcul, rappelle celle de mémorisation et précise  les notions de modèle de calcul et d’architecture des ordinateurs."},
      {id:UUID.UUID(),title:"La conception de systèmes avec FPGA",status:false,picture:"../../assets/fpga.jpg",descri:"Le but de cet ouvrage est de fournir l’ensemble des bonnes pratiques pour réussir la conception collective d’un système avec FPGA."},
      {id:UUID.UUID(),title:"Designing with Xilinx",status:false,picture:"../../assets/make_nimage.jpg",descri:"Ce livre est un guide pratique pour les utilisateurs qui découvrent les conceptions FPGA, ainsi que pour ceux qui utilisent actuellement l'ancien ensemble d'outils Xilinx (ISE) mais qui migrent maintenant vers Vivado. Tout au long de la présentation, les auteurs se concentrent sur les concepts clés, les principaux mécanismes d'entrée de conception et les méthodes pour réaliser la mise en œuvre la plus efficace de la conception cible."},
      {id:UUID.UUID(),title:"Les systèmes d'exploitation",status:false,picture:"../../assets/exploi.jpg",descri:"Ce livre introduit de manière pédagogique les principes des systèmes d'exploitation et leurs applications. Il présente sous forme de code tous les concepts associés aux OS modernes."},
      {id:UUID.UUID(),title:"Systèmes d'exploitation",status:false,picture:"../../assets/123.jpg",descri:"Cet ouvrage présente de façon pédagogique et complète les systèmes d'exploitation. Andrew Tanenbaum, auteur de nombreux livres et concepteur de plusieurs systèmes d'exploitation"},
      {id:UUID.UUID(),title:"Modélisation : objets avec UML",status:false,picture:"../../assets/uml.jpg",descri:"Premier livre publié dans le monde sur UML, traduit en langues anglaise et espagnole, Modélisation objet avec UML a guidé depuis mai 1997 plusieurs dizaines de milliers de personnes - chefs de projets, analystes et concepteurs, architectes logiciels, développeurs, étudiants."},
      {id:UUID.UUID(),title:"Modélisation Conceptuelle de Données",status:false,picture:"../../assets/momo.jpg",descri:"L’objectif de cet ouvrage n’est pas d’être exhaustif et de traiter tout ce qui peut exister en termes de modélisation de bases de données. Bien au contraire, l’idée maîtresse est de proposer une démarche pédagogique la plus simple possible, permettant de réaliser des modèles conceptuels de données sans faire appel à de quelconques connaissances préalables."},
      {id:UUID.UUID(),title:"Ingénierie mécanique",status:false,picture:"../../assets/31.jpg",descri:"Cette nouvelle édition aborde l’essentiel des dispositifs mécaniques installés dans une chaîne cinématique pour transmettre une puissance entre un moteur et un récepteur."},
      {id:UUID.UUID(),title:"La Quantique autrement",status:false,picture:"../../assets/32.png",descri:"Dans « La Quantique autrement », le physicien Julien Bobroff réussit à expliquer de manière vivante et accessible les concepts-clés et les phénomènes contre-intuitifs de cette discipline ardue."},
      {id:UUID.UUID(),title:"Guide de mécanique",status:false,picture:"../../assets/33.jpg",descri:"Ce véritable guide de référence rassemble en un seul volume l'essentiel des connaissances necessaires aux applications usuelles de la mecanique. La mécanique et ses principes fondamentaux y sont développés en tant que science industrielle."},
      {id:UUID.UUID(),title:"50 problèmes d'analyse",status:false,picture:"../../assets/34.jpg",descri:"cet ouvrage rassemble 50 problèmes corrigés. Bien qu'organisés thématiquement, les problèmes font en général appel simultanément à des connaissances diverses. Des indications de corrections sont proposées avant d'aborder les corrigés détaillés."},
      {id:UUID.UUID(),title:"Analyse complexe",status:false,picture:"../../assets/35.jpg",descri:"Chaque chapitre accueille une série d’exercices intégralement corrigés. Deux appendices – ajoutés en fin d’ouvrage – contiennent les connaissances requises en matière de séries et d’intégrales généralisées."},
      {id:UUID.UUID(),title:"Cyber Security",status:false,picture:"../../assets/36.jpg",descri:"Ce livre, axé sur les cybermenaces et la cybersécurité, fournit la prise de conscience indispensable à l'époque des épisodes croissants de cybercriminalité."},
      {id:UUID.UUID(),title:"Cyber Security",status:false,picture:"../../assets/37.jpg",descri:"Ce livre aborde la cybersécurité d'un point de vue organisationnel et managérial. Ainsi, les cybercriminels capitalisent sur les technologies émergentes (comme le big data ou l'intelligence artificielle) afin de mieux contourner les solutions classiques de cybersécurité."},
      {id:UUID.UUID(),title:"Introduction au Machine Learning",status:false,picture:"../../assets/38.jpg",descri:"Le but de cet ouvrage est de vous fournir des bases solides sur les concepts et les algorithmes de ce domaine en plein essor.  Il vous aidera à identifier les problèmes qui peuvent être résolus par une approche Machine Learning.."},
      {id:UUID.UUID(),title:"Introduction au Deep Learning ",status:false,picture:"../../assets/32.png",descri:"Dans « La Quantique autrement », le physicien Julien Bobroff réussit à expliquer de manière vivante et accessible les concepts-clés et les phénomènes contre-intuitifs de cette discipline ardue."},
      {id:UUID.UUID(),title:"La Quantique autrement",status:false,picture:"../../assets/32.png",descri:"Dans « La Quantique autrement », le physicien Julien Bobroff réussit à expliquer de manière vivante et accessible les concepts-clés et les phénomènes contre-intuitifs de cette discipline ardue."},


    ];

    for(let i=0;i<50;i++){
      this.books.push({id:UUID.UUID(),title:"language c",status:true,picture:"assets/Livre-programmation-java.jpg",descri:"Cet ouvrage met en avant toutes les connaissances nécessaires pour commencer dans le domaine du langage le plus couramment utilisé en programmation : JavaScript."});
      this.books.push({id:UUID.UUID(),title:"language java",status:false,picture:"../../assets/initialiser.jpg",descri:"Acquérir rapidement une parfaite maîtrise des techniques de programmation et savoir s’adapter facilement à tout nouveau langage Conçu pour les débutants en programmation."});
      this.books.push({id:UUID.UUID(),title:"language c++",status:true,picture:"../../assets/linux.jpg",descri:"cet ouvrage vous conduira rapidement à une bonne maîtrise des différents aspects de la programmation Linux, de l'écriture de scripts shell à la programmation Internet, en passant par la construction d'interfaces graphiques X Window ou Gnome"});
      this.books.push({id:UUID.UUID(),title:"algo",status:false,picture:"../../assets/programmerenc.jpg",descri:"Cet ouvrage est destiné aux étudiants débutants en langage C, mais ayant déjà quelques notions de programmation acquises par la pratique, même sommaire, d'un autre langage.."});
      this.books.push({id:UUID.UUID(),title:"Programmer en LANGUAGE c++",status:false,picture:"../../assets/c++.jpg",descri:"Vous aimeriez apprendre à programmer en C++ et vous cherchez un cours accessible aux débutants ? Cet ouvrage est fait pour vous ! Conçu pour les débutants, il vous permettra de découvrir le langage C++."});
      this.books.push({id:UUID.UUID(),title:"Programmer en LANGUAGE c++",status:false,picture:"../../assets/2212121350.08.LZZZZZZZ.jpg",descri:"Il s'adresse aussi bien aux étudiants en programmation qu'aux développeurs professionnels souhaitant se former à ce langage ou en approfondir la maîtrise."});
      this.books.push({id:UUID.UUID(),title:"Angular",status:false,picture:"../../assets/angular.jpg",descri:"Ce livre de la collection vBook se compose d'un livre de référence sur Angular en version 8 pour maîtriser le développement d’applications web avec le framework JavaScript de Google et d’un approfondissement sous forme de vidéo sur la gestion du routing pour mettre en place la navigation d'une application web."});
      this.books.push({id:UUID.UUID(),title:"Algorithmique",status:false,picture:"../../assets/download.jpg",descri:"Destiné aux étudiants et aux techniciens ou ingénieurs qui désirent développer une application de mesures, de tests ou de contrôle de procédé, cet ouvrage présente les bases du traitement des signaux et de l'acquisition de données, et expose les techniques de mise en oeuvre."});
      this.books.push({id:UUID.UUID(),title:"Traitement des signaux et acquisation de données",status:false,picture:"../../assets/images.jpg",descri:"Ce livre de cours traduit de l'américain, sans équivalent et d'accès facile, est une introduction complète à l'algorithmique et s'adresse aussi bien aux étudiants qu'aux professionnels en informatique."});
      this.books.push({id:UUID.UUID(),title:"électronique",status:false,picture:"../../assets/électronique.png",descri:"L'électronique est la discipline qui s'intéresse aux dispositifs électriques construits autour de la technologie des semi-conducteurs. La plupart du temps, les courants et les tensions mis en œuvre restent de faible amplitude, excepté  en électronique de puissance"});
      this.books.push({id:UUID.UUID(),title:"Électronique analogique",status:false,picture:"../../assets/007715783.jpg",descri:"Ne nécessitant qu'une formation en mathématiques de niveau baccalauréat, l'ouvrage introduit, aussi simplement que possible, les notions de base de l'électronique analogique linéaire basse fréquence."});
      this.books.push({id:UUID.UUID(),title:"Microcontrôleurs PIC : programmation en Basic",status:false,picture:"../../assets/microprocesseur.jpg",descri:"Cet ouvrage aborde tous les aspects, théoriques et pratiques, de la programmation en Basic des microcontrôleurs PIC. Il propose : une présentation comparative des principaux compilateurs Basic pour PIC du marché."});
      this.books.push({id:UUID.UUID(),title:"Electronique de puissance",status:false,picture:"../../assets/electpuissance.jpg",descri:"Ce cours complet d'électronique de puissance propose une approche pratique et descriptive, associée à un exposé progressif et détaillé du cours. Il accompagnera le lecteur, depuis l'apprentissage des notions et des mécaniques de basede l'électronique de commutation jusqu'à l'étude complète de systèmes réels"});
      this.books.push({id:UUID.UUID(),title:"Signaux et systèmes à temps continu et discret",status:false,picture:"../../assets/syst.jpg",descri:"Cet ouvrage présente les concepts de base mis en œuvre dans les systèmes asservis linéaires à temps continu et discret : notions de boucle fermée, comportement des systèmes bouclés, identification et commande de systèmes bouclés."})
      this.books.push({id:UUID.UUID(),title:"Automatique des systèmes échantillonnés",status:false,picture:"../../assets/aaa.jpg",descri:"Cet ouvrage présente les aspects fondamentaux relatifs à la modélisation, l'analyse et la commande des processus continus à commande échantillonnée."})
      this.books.push({ id:UUID.UUID(),title:"Automatique de base",status:false,picture:"../../assets/imagesf.jfif",descri:"Ce cours d'automatique est spécialement destiné aux étudiants scientifiques du second cycle, et concerne notamment ceux qui sont engagés dans des études d'ingénieur. "})
      this.books.push({id:UUID.UUID(),title:"Automatique appliquée",status:false,picture:"../../assets/dodo.jpg",descri:"l'automatique est désormais accessible aux ingénieurs généralistes grâce à la pratique industrielle de la simulation, à l'approche systémique, aux boîtes à outils logicielles et aux moyens de calcul embarqués."})
      this.books.push({id:UUID.UUID(),title:"Automatique industrielle en 20 fiches",status:false,picture:"../../assets/indus.jpg",descri:"Conçue pour faciliter aussi bien l’apprentissage que la révision, la collection « EXPRESS » vous propose une présentation simple et concise de l’Automatique industrielle en 20 fiches pédagogiques."})
      this.books.push({id:UUID.UUID(),title:"Le grand guide des systèmes de contrôle commande industriels",status:false,picture:"../../assets/couv.jpg",descri:"Cet ouvrage présente les concepts de base mis en œuvre dans les systèmes asservis linéaires à temps continu et discret : notions de boucle fermée, comportement des systèmes bouclés, identification et commande de systèmes bouclés."} )
      this.books.push({id:UUID.UUID(),title:"Réseaux",status:false,picture:"../../assets/res.jpg",descri:"L'ouvrage de référence sur les réseaux, entièrement mis à jour pour inclure les technologies incontournables de demain."})
      this.books.push({id:UUID.UUID(),title:"Tout sur les réseaux et Internet",status:false,picture:"../../assets/OO.jpg",descri:"Cet ouvrage présente les différentes notions à connaître pour être en mesure de mettre en place, de gérer, de sécuriser et de dépanner un réseau, indépendamment du système d’exploitation utilisé (Windows, macOS ou Linux)."})
      this.books.push({id:UUID.UUID(),title:"MIPS Assembly Language Programming",status:false,picture:"../../assets/mips.jpg",descri:"Les étudiants utilisant ce texte comprendront comment les composants fonctionnels des ordinateurs modernes sont assemblés et comment un ordinateur fonctionne au niveau du langage machine."})
      this.books.push({id:UUID.UUID(),title:"systemes a microprocesseur",status:false,picture:"../../assets/largepreview.png",descri:"Dans ce cours, les structures logiques séquentielles sont présentées dans la première partie. Ces structures sont composées d’élements logiques faisant intervenir la notion de mémoire et d’etats précédents pour provoquer le changement d’´etat de sortie de la structure"})
      this.books.push({id:UUID.UUID(),title:"Le Microprocesseur 1",status:false,picture:"../../assets/Le-microprocesseur-1.jpg",descri:"Le microprocesseur 1 traite des deux premières générations de microprocesseurs, c’est-à-dire celles qui manipulent les entiers aux formats de 4 et 8 bits. Ce volume présente la fonction de calcul, rappelle celle de mémorisation et précise  les notions de modèle de calcul et d’architecture des ordinateurs."})
      this.books.push({id:UUID.UUID(),title:"La conception de systèmes avec FPGA",status:false,picture:"../../assets/fpga.jpg",descri:"Le but de cet ouvrage est de fournir l’ensemble des bonnes pratiques pour réussir la conception collective d’un système avec FPGA."})
      this.books.push({id:UUID.UUID(),title:"Designing with Xilinx",status:false,picture:"../../assets/make_nimage.jpg",descri:"Ce livre est un guide pratique pour les utilisateurs qui découvrent les conceptions FPGA, ainsi que pour ceux qui utilisent actuellement l'ancien ensemble d'outils Xilinx (ISE) mais qui migrent maintenant vers Vivado. Tout au long de la présentation, les auteurs se concentrent sur les concepts clés, les principaux mécanismes d'entrée de conception et les méthodes pour réaliser la mise en œuvre la plus efficace de la conception cible."})
      this.books.push({id:UUID.UUID(),title:"Les systèmes d'exploitation",status:false,picture:"../../assets/exploi.jpg",descri:"Ce livre introduit de manière pédagogique les principes des systèmes d'exploitation et leurs applications. Il présente sous forme de code tous les concepts associés aux OS modernes."})
      this.books.push({id:UUID.UUID(),title:"Systèmes d'exploitation",status:false,picture:"../../assets/123.jpg",descri:"Cet ouvrage présente de façon pédagogique et complète les systèmes d'exploitation. Andrew Tanenbaum, auteur de nombreux livres et concepteur de plusieurs systèmes d'exploitation"})
      this.books.push({id:UUID.UUID(),title:"Modélisation : objets avec UML",status:false,picture:"../../assets/uml.jpg",descri:"Premier livre publié dans le monde sur UML, traduit en langues anglaise et espagnole, Modélisation objet avec UML a guidé depuis mai 1997 plusieurs dizaines de milliers de personnes - chefs de projets, analystes et concepteurs, architectes logiciels, développeurs, étudiants."})
      this.books.push({id:UUID.UUID(),title:"Modélisation Conceptuelle de Données",status:false,picture:"../../assets/momo.jpg",descri:"L’objectif de cet ouvrage n’est pas d’être exhaustif et de traiter tout ce qui peut exister en termes de modélisation de bases de données. Bien au contraire, l’idée maîtresse est de proposer une démarche pédagogique la plus simple possible, permettant de réaliser des modèles conceptuels de données sans faire appel à de quelconques connaissances préalables."})
      this.books.push({id:UUID.UUID(),title:"Ingénierie mécanique",status:false,picture:"../../assets/31.jpg",descri:"Cette nouvelle édition aborde l’essentiel des dispositifs mécaniques installés dans une chaîne cinématique pour transmettre une puissance entre un moteur et un récepteur."})
      this.books.push({id:UUID.UUID(),title:"La Quantique autrement",status:false,picture:"../../assets/32.png",descri:"Dans « La Quantique autrement », le physicien Julien Bobroff réussit à expliquer de manière vivante et accessible les concepts-clés et les phénomènes contre-intuitifs de cette discipline ardue."})

    }}
  public  getAllBooks():Observable<Array<books>>{
    let rnd=Math.random();
    if(rnd<0.1) return throwError(()=>new Error("Internet connexion error"));
    else return of(this.books);
  }

  public  getPageBooks(page:number,size:number):Observable<PageBook>{
    let index=page*size; //pour afficher a partir d'un index
    let totalPages = ~~(this.books.length / size);
    if(this.books.length % size!=0)
      totalPages++;
    let pageBook=this.books.slice(index,index+size);
    return of({page:page,size:size,totalPages:totalPages,books : pageBook});
  }

  public deleteBook(id:string):Observable<boolean>{
   this.books=this.books.filter(b=>b.id!=id);
    return of(true);

  }


  setStatus(id:string) :Observable<boolean>{
    let book = this.books.find(b=>b.id==id);
    if(book !=undefined){
      book.status=!book.status;
      return of(true);
    } else return throwError(()=>Error("book not found"));
  }
  public searchBooks(keyword:string,page:number,size:number):Observable<PageBook>{
    let result=this.books.filter(b=>b.title.includes(keyword));
    let index=page*size; //pour afficher a partir d'un index
    let totalPages = ~~(result.length / size);
    if(this.books.length % size!=0)
      totalPages++;
    let pageBook=result.slice(index,index+size);
    return of({page:page,size:size,totalPages:totalPages,books : pageBook});
  }

  public addNewBook(book : books):Observable<books>{
book.id=UUID.UUID();
this.books.push(book);
return of(book);
  }
  public getBook(id:string):Observable<books>{
    let book=this.books.find(b=>b.id==id);
    if(book==undefined) return throwError(()=>new Error("book not found"));

    return of(book);
  }
  getErrorMessage(title: string, errors: ValidationErrors) {
    if(errors['required']){
      return title + " is Required";}
    else if(errors['minLength']){
      return title+ " should have at least " +errors['minLength']['requiredLength'] +"Characters";}
    else return "";
  }
  public updateBook(book:books):Observable<books>{
    this.books=this.books.map(b=>(b.id==book.id)?book:b);
return of(book);
  }
}

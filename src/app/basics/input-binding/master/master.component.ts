import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fruits : Array<Fruit> = [
    {
      name: "Banana",
      description: `The banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called plantains. The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.`
    }, 
    {
      name: "Apple",
      description : `Apple trees are typically 4–12 m (13–39 ft) tall at maturity, with a dense, twiggy crown. The leaves are 3–10 cm (1.2–3.9 in) long, alternate, simple, with a serrated margin. The flowers are borne in corymbs, and have five petals, which may be white, pink or red, and are perfect, with usually red stamens that produce copious pollen, and a half-inferior ovary; flowering occurs in the spring after 50–80 growing degree days (varying greatly according to subspecies and cultivar).`
    }, 
    {
      name: "Peach",
      description: `The peach (Prunus persica) is a deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Shan mountains, where it was first domesticated and cultivated.[3] It bears an edible juicy fruit called a peach or a nectarine.
The specific epithet persica refers to its widespread cultivation in Persia, whence it was transplanted to Europe. It belongs to the genus Prunus which includes the cherry, apricot, almond and plum, in the rose family. The peach is classified with the almond in the subgenus Amygdalus, distinguished from the other subgenera by the corrugated seed shell.
Peach and nectarines are the same species, even though they are regarded commercially as different fruits. In contrast to peaches, whose fruits present the characteristic fuzz on the skin, nectarines are characterized by the absence of fruit-skin trichomes (fuzz-less fruit); genetic studies suggest nectarines are produced due to a recessive allele, whereas peaches are produced from a dominant allele for fuzzy skin.[4]`
    }
];

  selectedFruit : Fruit = null;
}

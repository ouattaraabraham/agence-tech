"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Frank wole",
    designation: "Ingénieur logiciel",
    image:
        "https://cdn.pixabay.com/photo/2015/06/01/21/17/african-794307_1280.jpg"
  },
  {
    id: 2,
    name: "Eric Kouakou",
    designation: "chef de projet",
    image:
      "https://img.freepik.com/photos-gratuite/gros-plan-personne-travaillant-energie-alternative_23-2149311495.jpg?t=st=1721382446~exp=1721386046~hmac=edf5e6e8f084396dbd0349948eb309eb255a8039dab60b258307c5f552b116d0&w=900"
  },
  {
    id: 3,
    name: "Ami Fofana",
    designation: "UI designer",
    image:
        "https://img.freepik.com/photos-gratuite/jeune-femme-noire-dans-bureau_641386-605.jpg?t=st=1721384016~exp=1721387616~hmac=e22a3a2ceb0acfc830d7fea6ce9fa9ec87755a02a77ea38a80b6adfca06e9455&w=900"
  },
  {
    id: 4,
    name: "Dorcas kouame",
    designation: "Graphic Designer",
    image:
     "https://img.freepik.com/photos-gratuite/designer-industriel-travaillant-modele-3d_23-2149370125.jpg?t=st=1721384328~exp=1721387928~hmac=cba0fadba9723083c25a8bbba88652525f69fa0234f8980fcebb101977ea95d9&w=900"
  },
  {
    id: 5,
    name: "Fabrice oulai",
    designation: "Developer Front-end",
    image:
       "https://img.freepik.com/photos-gratuite/designer-industriel-travaillant-modele-3d_23-2149370098.jpg?t=st=1721384435~exp=1721388035~hmac=7f4b66be44ca363fc209ec9be658bb0c9ab5876e0f8d96ba10c46e52e8436ffd&w=900"
  },
  {
    id: 6,
    name: "Loriane konate",
    designation: "Digital Marketer",
    image:
         "https://img.freepik.com/photos-gratuite/femme-smiley-coup-moyen-au-bureau_23-2148924767.jpg?t=st=1721384530~exp=1721388130~hmac=677189b8d0a865447ee0020f72f237d6b737fee72b3f7c4126c9305d3936b194&w=900"
  },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-5 lg:mb-10">
      <AnimatedTooltip items={people} />
    </div>
  );
}

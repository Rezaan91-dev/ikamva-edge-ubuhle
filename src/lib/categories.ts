import hair from "@/assets/cat-hair.jpg";
import skin from "@/assets/cat-skin.jpg";
import makeup from "@/assets/cat-makeup.jpg";
import wellness from "@/assets/cat-wellness.jpg";
import men from "@/assets/cat-men.jpg";
import baby from "@/assets/cat-baby.jpg";

export type Category = {
  name: string;
  blurb: string;
  image: string;
  tag: string;
};

export const FEATURED_CATEGORIES: Category[] = [
  { name: "Hair Care", blurb: "Nourish, grow, protect.", image: hair, tag: "Crown Essentials" },
  { name: "Skincare", blurb: "Glow with confidence.", image: skin, tag: "Radiance" },
  { name: "Makeup", blurb: "Express your edge.", image: makeup, tag: "Cosmetics" },
  { name: "Wellness", blurb: "Inner beauty, outward glow.", image: wellness, tag: "Health" },
  { name: "Men's Grooming", blurb: "Refined daily rituals.", image: men, tag: "For Him" },
  { name: "Baby Care", blurb: "Gentle from the start.", image: baby, tag: "Tender" },
];

export const SHOP_CATEGORIES = [
  "Hair Care","Hair Growth Solutions","Hair Accessories","Hair Styling Products",
  "Protective Hairstyles","Skincare","Cosmetics & Makeup","Oral Care","Men's Grooming",
  "Women's Personal Care","Baby Care","Health Products","Wellness Supplements",
  "Electrical Beauty Tools","Household Essentials","Lifestyle Essentials",
];

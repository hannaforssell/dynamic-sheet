import { parse } from "node-html-parser";
import { KnownSpell } from "../models/characterSheet/KnownSpell";
import { SpellSchool } from "../models/characterSheet/SpellSchool";

const tagRegexp = new RegExp(/<.*?>/g);

export const MapFromPFSRD = (html: string) => {
    const root = parse(html);
    const article = root.querySelector("#article-content");

    if (!article) {
        return null;
    }

    const name = article.querySelector("h1")?.text.trim() || "";

    const schoolMatch = article.querySelector("p")?.innerHTML.match(/<b>School<\/b>.*?<a.*?>(.*?)<\/a>/);
    const school = schoolMatch ? (schoolMatch[1].toUpperCase() as SpellSchool) : SpellSchool.Unkown;

    let level = 1;
    const levelMatch = article.querySelector("p")?.innerHTML.match(/<b>Level<\/b>/);
    if (levelMatch?.input) {
        const [, levelPart] = levelMatch.input.split(/<b>Level<\/b>/);
        const firstLevel = levelPart.replaceAll(tagRegexp, "").match(/\d/);
        if (firstLevel) {
            level = parseInt(firstLevel[0], 10);
        }
    }

    const castingTimeMatch = article.querySelectorAll("p").find((p) => p.innerHTML.includes("<b>Casting Time</b>"));

    let [castingTime, components] = castingTimeMatch?.text.split("Components") ?? ["", ""];

    castingTime = castingTime.replace("Casting Time", "").trim();
    components = components.trim();

    const effectParagraph = article.querySelectorAll("p").find((p) => p.innerHTML.includes("<b>Range</b>"));
    let range = "",
        target = "",
        duration = "",
        savingThrow = "",
        spellResistance = "";

    if (effectParagraph) {
        const text = effectParagraph.innerHTML;
        range =
            text
                .match(/<b>Range<\/b>(.*?)<br>/)?.[1]
                ?.replaceAll(tagRegexp, "")
                .trim() || "";
        target =
            text
                .match(/<b>Targets?<\/b>(.*?)<br>/)?.[1]
                ?.replaceAll(tagRegexp, "")
                .trim() || "";
        duration =
            text
                .match(/<b>Duration<\/b>(.*?)<br>/)?.[1]
                ?.replaceAll(tagRegexp, "")
                .trim() || "";
        savingThrow =
            text
                .match(/<b>Saving Throw<\/b>(.*?);/)?.[1]
                ?.replaceAll(tagRegexp, "")
                .trim() || "";
        spellResistance =
            text
                .match(/<b>Spell Resistance<\/b>(.*?)$/)?.[1]
                ?.replaceAll(tagRegexp, "")
                .trim() || "";
    }

    const descriptionParagraphs = article.querySelectorAll("p");
    const descriptionStartIndex = descriptionParagraphs.findIndex((p) => p.innerText === "DESCRIPTION");
    const descriptionEndIndex = descriptionParagraphs.findIndex((p) => p.classNames === "ed-note-header");

    const text =
        descriptionStartIndex !== -1
            ? descriptionParagraphs
                  .slice(descriptionStartIndex + 1, descriptionEndIndex)
                  .map((p) => p.text.trim())
                  .join("\n\n")
            : "";

    return new KnownSpell(name, "", school, level, castingTime, components, range, target, duration, savingThrow, spellResistance, text, []);
};

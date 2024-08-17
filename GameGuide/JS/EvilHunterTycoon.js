//--------------------------------------------------------------------------------------------------------------------On Load
function OnLoad() {
    CheckAndUpdateData();
    SetIndex();
    SetPageData();
}
function CheckAndUpdateData() {
    //function for updating data for new data that exceed the comment below
    //Index_Costume_75
    //Index_Weapon_56
    //Index_Wing_16
    //Index_Medal_11
    //Page Data_____LastSaveDate(DD/MM/YY)
    //Eg.Check if (LastSaveDate(DD/MM/YY) Data is null and Use PageDataText[1] = "None"; SavePageDataLocally();
}
//--------------------------------------------------------------------------------------------------------------------Set Index (On Load)
let IndexDataText;
let IndexCostumeDataText;
let IndexWeaponDataText;
let IndexWingDataText;
let IndexMedalDataText;
function SetIndex() {
    //Index_____Costume_____Weapon_____Wing_____Medal
    if (window.localStorage.getItem("Index") != null) {
        IndexDataText = window.localStorage.getItem("Index").split("_____");
        IndexCostumeDataText = IndexDataText[1].split("_");
        IndexWeaponDataText = IndexDataText[2].split("_");
        IndexWingDataText = IndexDataText[3].split("_");
        IndexMedalDataText = IndexDataText[4].split("_");
        let A = 0;
        IndexCostumeDataText.forEach(function () {
            SetIndex1("Index_Costume_" + A);
            A = A + 1;
        });
        let B = 0;
        IndexWeaponDataText.forEach(function () {
            SetIndex1("Index_Weapon_" + B);
            B = B + 1;
        });
        let C = 0;
        IndexWingDataText.forEach(function () {
            SetIndex1("Index_Wing_" + C);
            C = C + 1;
        });
        let D = 0;
        IndexMedalDataText.forEach(function () {
            SetIndex1("Index_Medal_" + D);
            D = D + 1;
        });
    }
    else {
        window.localStorage.setItem("Index", "Index_____0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_____0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_____0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_0_____0_0_0_0_0_0_0_0_0_0_0");
    }
    StatManagement();
}
function SetIndex1(let) {
    if (let.split("_")[1] == "Costume") {
        if (IndexCostumeDataText[let.split("_")[2]] == 0) {
            document.getElementById("Index_Costume_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/X.jpg";
        }
        else if (IndexCostumeDataText[let.split("_")[2]] == 1) {
            document.getElementById("Index_Costume_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/O.jpg";
        }
    }
    else if (let.split("_")[1] == "Weapon") {
        if (IndexWeaponDataText[let.split("_")[2]] == 0) {
            document.getElementById("Index_Weapon_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/X.jpg";
        }
        else if (IndexWeaponDataText[let.split("_")[2]] == 1) {
            document.getElementById("Index_Weapon_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/O.jpg";
        }
    }
    else if (let.split("_")[1] == "Wing") {
        if (IndexWingDataText[let.split("_")[2]] == 0) {
            document.getElementById("Index_Wing_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/X.jpg";
        }
        else if (IndexWingDataText[let.split("_")[2]] == 1) {
            document.getElementById("Index_Wing_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/O.jpg";
        }
    }
    else if (let.split("_")[1] == "Medal") {
        if (IndexMedalDataText[let.split("_")[2]] == 0) {
            document.getElementById("Index_Medal_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/X.jpg";
        }
        else if (IndexMedalDataText[let.split("_")[2]] == 1) {
            document.getElementById("Index_Medal_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/O.jpg";
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------Set Page Data (On Load)
let PageDataText;
function SetPageData() {
    //Page Data_____LastSaveDate(DD/MM/YY)
    if (window.localStorage.getItem("Page Data") != null) {
        PageDataText = window.localStorage.getItem("Page Data").split("_____");
        document.getElementById("LastSaveDate").innerHTML = "Last Save (" + PageDataText[1] + ")";
    }
    else {
        window.localStorage.setItem("Page Data", "Page Data_____None");
    }
}
//--------------------------------------------------------------------------------------------------------------------Index Collection Button Click
function IndexCollectionButton(let) {
    if (let.split("_")[1] == "Costume") {
        if (IndexCostumeDataText[let.split("_")[2]] == 0) {
            document.getElementById("Index_Costume_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/O.jpg";
            IndexCostumeDataText[let.split("_")[2]] = 1;
        }
        else if (IndexCostumeDataText[let.split("_")[2]] == 1) {
            document.getElementById("Index_Costume_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/X.jpg";
            IndexCostumeDataText[let.split("_")[2]] = 0;
        }
    }
    else if (let.split("_")[1] == "Weapon") {
        if (IndexWeaponDataText[let.split("_")[2]] == 0) {
            document.getElementById("Index_Weapon_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/O.jpg";
            IndexWeaponDataText[let.split("_")[2]] = 1;
        }
        else if (IndexWeaponDataText[let.split("_")[2]] == 1) {
            document.getElementById("Index_Weapon_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/X.jpg";
            IndexWeaponDataText[let.split("_")[2]] = 0;
        }
    }
    else if (let.split("_")[1] == "Wing") {
        if (IndexWingDataText[let.split("_")[2]] == 0) {
            document.getElementById("Index_Wing_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/O.jpg";
            IndexWingDataText[let.split("_")[2]] = 1;
        }
        else if (IndexWingDataText[let.split("_")[2]] == 1) {
            document.getElementById("Index_Wing_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/X.jpg";
            IndexWingDataText[let.split("_")[2]] = 0;
        }
    }
    else if (let.split("_")[1] == "Medal") {
        if (IndexMedalDataText[let.split("_")[2]] == 0) {
            document.getElementById("Index_Medal_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/O.jpg";
            IndexMedalDataText[let.split("_")[2]] = 1;
        }
        else if (IndexMedalDataText[let.split("_")[2]] == 1) {
            document.getElementById("Index_Medal_" + let.split("_")[2]).src = "../../GameGuide/Data/EvilHunterTycoon/X.jpg";
            IndexMedalDataText[let.split("_")[2]] = 0;
        }
    }
    SaveIndexLocally();
    StatManagement();
}
let IndexCostumeOnlyStat;
let IndexWeaponOnlyStat;
let IndexWingOnlyStat;
let IndexMedalOnlyStat;
let IndexSetOnlyStat;
//EXP, ATK, DEF, HP, CRIT, Critical Hit Damage, Satiety use decrease, Chance of obtaining an additional 3rd Class Technical Book, Increase Against Boss, Increase Against Primate, Stamina use decrease, Mood use decrease, Increase Against Undead, Increase Against Demon, Increase Against Animal
//  0,   1,   2,  3,    4,                   5,                    6,                                                          7,                     8,                        9,                   10,                11,                      12,                     13,                      14
function StatManagement() {
    StatManagement1();
    StatManagement2();
    StatManagement3();
    StatManagement2();
}
function StatManagement1() {
    IndexCostumeOnlyStat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    IndexWeaponOnlyStat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    IndexWingOnlyStat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    IndexMedalOnlyStat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    IndexSetOnlyStat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}
function StatManagement2() {
    document.getElementById("IndexCostumeEXPStat").innerHTML = (IndexCostumeOnlyStat[0] / 100) + "%";
    document.getElementById("IndexCostumeATKStat").innerHTML = (IndexCostumeOnlyStat[1] / 100) + "%";
    document.getElementById("IndexCostumeDEFStat").innerHTML = (IndexCostumeOnlyStat[2] / 100) + "%";
    document.getElementById("IndexCostumeHPStat").innerHTML = (IndexCostumeOnlyStat[3] / 100) + "%";
    document.getElementById("IndexCostumeCRITStat").innerHTML = (IndexCostumeOnlyStat[4] / 100) + "%";
    document.getElementById("IndexCostumeCriticalHitDamageStat").innerHTML = (IndexCostumeOnlyStat[5] / 100) + "%";
    document.getElementById("IndexCostumeSatietyStat").innerHTML = (IndexCostumeOnlyStat[6] / 100) + "%";
    document.getElementById("IndexCostumeChance3rdBookStat").innerHTML = (IndexCostumeOnlyStat[7] / 100) + "%";
    document.getElementById("IndexCostumeBossStat").innerHTML = (IndexCostumeOnlyStat[8] / 100) + "%";
    document.getElementById("IndexCostumePrimateStat").innerHTML = (IndexCostumeOnlyStat[9] / 100) + "%";
    document.getElementById("IndexCostumeStaminaStat").innerHTML = (IndexCostumeOnlyStat[10] / 100) + "%";
    document.getElementById("IndexCostumeMoodStat").innerHTML = (IndexCostumeOnlyStat[11] / 100) + "%";
    document.getElementById("IndexCostumeUndeadStat").innerHTML = (IndexCostumeOnlyStat[12] / 100) + "%";
    document.getElementById("IndexCostumeDemonStat").innerHTML = (IndexCostumeOnlyStat[13] / 100) + "%";
    document.getElementById("IndexCostumeAnimalStat").innerHTML = (IndexCostumeOnlyStat[14] / 100) + "%";

    document.getElementById("IndexWeaponEXPStat").innerHTML = (IndexWeaponOnlyStat[0] / 100) + "%";
    document.getElementById("IndexWeaponATKStat").innerHTML = (IndexWeaponOnlyStat[1] / 100) + "%";
    document.getElementById("IndexWeaponDEFStat").innerHTML = (IndexWeaponOnlyStat[2] / 100) + "%";
    document.getElementById("IndexWeaponHPStat").innerHTML = (IndexWeaponOnlyStat[3] / 100) + "%";
    document.getElementById("IndexWeaponCRITStat").innerHTML = (IndexWeaponOnlyStat[4] / 100) + "%";
    document.getElementById("IndexWeaponCriticalHitDamageStat").innerHTML = (IndexWeaponOnlyStat[5] / 100) + "%";
    document.getElementById("IndexWeaponSatietyStat").innerHTML = (IndexWeaponOnlyStat[6] / 100) + "%";
    document.getElementById("IndexWeaponChance3rdBookStat").innerHTML = (IndexWeaponOnlyStat[7] / 100) + "%";
    document.getElementById("IndexWeaponBossStat").innerHTML = (IndexWeaponOnlyStat[8] / 100) + "%";
    document.getElementById("IndexWeaponPrimateStat").innerHTML = (IndexWeaponOnlyStat[9] / 100) + "%";
    document.getElementById("IndexWeaponStaminaStat").innerHTML = (IndexWeaponOnlyStat[10] / 100) + "%";
    document.getElementById("IndexWeaponMoodStat").innerHTML = (IndexWeaponOnlyStat[11] / 100) + "%";
    document.getElementById("IndexWeaponUndeadStat").innerHTML = (IndexWeaponOnlyStat[12] / 100) + "%";
    document.getElementById("IndexWeaponDemonStat").innerHTML = (IndexWeaponOnlyStat[13] / 100) + "%";
    document.getElementById("IndexWeaponAnimalStat").innerHTML = (IndexWeaponOnlyStat[14] / 100) + "%";

    document.getElementById("IndexWingEXPStat").innerHTML = (IndexWingOnlyStat[0] / 100) + "%";
    document.getElementById("IndexWingATKStat").innerHTML = (IndexWingOnlyStat[1] / 100) + "%";
    document.getElementById("IndexWingDEFStat").innerHTML = (IndexWingOnlyStat[2] / 100) + "%";
    document.getElementById("IndexWingHPStat").innerHTML = (IndexWingOnlyStat[3] / 100) + "%";
    document.getElementById("IndexWingCRITStat").innerHTML = (IndexWingOnlyStat[4] / 100) + "%";
    document.getElementById("IndexWingCriticalHitDamageStat").innerHTML = (IndexWingOnlyStat[5] / 100) + "%";
    document.getElementById("IndexWingSatietyStat").innerHTML = (IndexWingOnlyStat[6] / 100) + "%";
    document.getElementById("IndexWingChance3rdBookStat").innerHTML = (IndexWingOnlyStat[7] / 100) + "%";
    document.getElementById("IndexWingBossStat").innerHTML = (IndexWingOnlyStat[8] / 100) + "%";
    document.getElementById("IndexWingPrimateStat").innerHTML = (IndexWingOnlyStat[9] / 100) + "%";
    document.getElementById("IndexWingStaminaStat").innerHTML = (IndexWingOnlyStat[10] / 100) + "%";
    document.getElementById("IndexWingMoodStat").innerHTML = (IndexWingOnlyStat[11] / 100) + "%";
    document.getElementById("IndexWingUndeadStat").innerHTML = (IndexWingOnlyStat[12] / 100) + "%";
    document.getElementById("IndexWingDemonStat").innerHTML = (IndexWingOnlyStat[13] / 100) + "%";
    document.getElementById("IndexWingAnimalStat").innerHTML = (IndexWingOnlyStat[14] / 100) + "%";

    document.getElementById("IndexMedalEXPStat").innerHTML = (IndexMedalOnlyStat[0] / 100) + "%";
    document.getElementById("IndexMedalATKStat").innerHTML = (IndexMedalOnlyStat[1] / 100) + "%";
    document.getElementById("IndexMedalDEFStat").innerHTML = (IndexMedalOnlyStat[2] / 100) + "%";
    document.getElementById("IndexMedalHPStat").innerHTML = (IndexMedalOnlyStat[3] / 100) + "%";
    document.getElementById("IndexMedalCRITStat").innerHTML = (IndexMedalOnlyStat[4] / 100) + "%";
    document.getElementById("IndexMedalCriticalHitDamageStat").innerHTML = (IndexMedalOnlyStat[5] / 100) + "%";
    document.getElementById("IndexMedalSatietyStat").innerHTML = (IndexMedalOnlyStat[6] / 100) + "%";
    document.getElementById("IndexMedalChance3rdBookStat").innerHTML = (IndexMedalOnlyStat[7] / 100) + "%";
    document.getElementById("IndexMedalBossStat").innerHTML = (IndexMedalOnlyStat[8] / 100) + "%";
    document.getElementById("IndexMedalPrimateStat").innerHTML = (IndexMedalOnlyStat[9] / 100) + "%";
    document.getElementById("IndexMedalStaminaStat").innerHTML = (IndexMedalOnlyStat[10] / 100) + "%";
    document.getElementById("IndexMedalMoodStat").innerHTML = (IndexMedalOnlyStat[11] / 100) + "%";
    document.getElementById("IndexMedalUndeadStat").innerHTML = (IndexMedalOnlyStat[12] / 100) + "%";
    document.getElementById("IndexMedalDemonStat").innerHTML = (IndexMedalOnlyStat[13] / 100) + "%";
    document.getElementById("IndexMedalAnimalStat").innerHTML = (IndexMedalOnlyStat[14] / 100) + "%";

    document.getElementById("IndexCollectionEXPStat").innerHTML = ((IndexCostumeOnlyStat[0] + IndexWeaponOnlyStat[0] + IndexWingOnlyStat[0] + IndexMedalOnlyStat[0]) / 100) + "%";
    document.getElementById("IndexCollectionATKStat").innerHTML = ((IndexCostumeOnlyStat[1] + IndexWeaponOnlyStat[1] + IndexWingOnlyStat[1] + IndexMedalOnlyStat[1]) / 100) + "%";
    document.getElementById("IndexCollectionDEFStat").innerHTML = ((IndexCostumeOnlyStat[2] + IndexWeaponOnlyStat[2] + IndexWingOnlyStat[2] + IndexMedalOnlyStat[2]) / 100) + "%";
    document.getElementById("IndexCollectionHPStat").innerHTML = ((IndexCostumeOnlyStat[3] + IndexWeaponOnlyStat[3] + IndexWingOnlyStat[3] + IndexMedalOnlyStat[3]) / 100) + "%";
    document.getElementById("IndexCollectionCRITStat").innerHTML = ((IndexCostumeOnlyStat[4] + IndexWeaponOnlyStat[4] + IndexWingOnlyStat[4] + IndexMedalOnlyStat[4]) / 100) + "%";
    document.getElementById("IndexCollectionCriticalHitDamageStat").innerHTML = ((IndexCostumeOnlyStat[5] + IndexWeaponOnlyStat[5] + IndexWingOnlyStat[5] + IndexMedalOnlyStat[5]) / 100) + "%";
    document.getElementById("IndexCollectionSatietyStat").innerHTML = ((IndexCostumeOnlyStat[6] + IndexWeaponOnlyStat[6] + IndexWingOnlyStat[6] + IndexMedalOnlyStat[6]) / 100) + "%";
    document.getElementById("IndexCollectionChance3rdBookStat").innerHTML = ((IndexCostumeOnlyStat[7] + IndexWeaponOnlyStat[7] + IndexWingOnlyStat[7] + IndexMedalOnlyStat[7]) / 100) + "%";
    document.getElementById("IndexCollectionBossStat").innerHTML = ((IndexCostumeOnlyStat[8] + IndexWeaponOnlyStat[8] + IndexWingOnlyStat[8] + IndexMedalOnlyStat[8]) / 100) + "%";
    document.getElementById("IndexCollectionPrimateStat").innerHTML = ((IndexCostumeOnlyStat[9] + IndexWeaponOnlyStat[9] + IndexWingOnlyStat[9] + IndexMedalOnlyStat[9]) / 100) + "%";
    document.getElementById("IndexCollectionStaminaStat").innerHTML = ((IndexCostumeOnlyStat[10] + IndexWeaponOnlyStat[10] + IndexWingOnlyStat[10] + IndexMedalOnlyStat[10]) / 100) + "%";
    document.getElementById("IndexCollectionMoodStat").innerHTML = ((IndexCostumeOnlyStat[11] + IndexWeaponOnlyStat[11] + IndexWingOnlyStat[11] + IndexMedalOnlyStat[11]) / 100) + "%";
    document.getElementById("IndexCollectionUndeadStat").innerHTML = ((IndexCostumeOnlyStat[12] + IndexWeaponOnlyStat[12] + IndexWingOnlyStat[12] + IndexMedalOnlyStat[12]) / 100) + "%";
    document.getElementById("IndexCollectionDemonStat").innerHTML = ((IndexCostumeOnlyStat[13] + IndexWeaponOnlyStat[13] + IndexWingOnlyStat[13] + IndexMedalOnlyStat[13]) / 100) + "%";
    document.getElementById("IndexCollectionAnimalStat").innerHTML = ((IndexCostumeOnlyStat[14] + IndexWeaponOnlyStat[14] + IndexWingOnlyStat[14] + IndexMedalOnlyStat[14]) / 100) + "%";

    document.getElementById("IndexSetEXPStat").innerHTML = (IndexSetOnlyStat[0] / 100) + "%";
    document.getElementById("IndexSetATKStat").innerHTML = (IndexSetOnlyStat[1] / 100) + "%";
    document.getElementById("IndexSetDEFStat").innerHTML = (IndexSetOnlyStat[2] / 100) + "%";
    document.getElementById("IndexSetHPStat").innerHTML = (IndexSetOnlyStat[3] / 100) + "%";
    document.getElementById("IndexSetCRITStat").innerHTML = (IndexSetOnlyStat[4] / 100) + "%";
    document.getElementById("IndexSetCriticalHitDamageStat").innerHTML = (IndexSetOnlyStat[5] / 100) + "%";
    document.getElementById("IndexSetSatietyStat").innerHTML = (IndexSetOnlyStat[6] / 100) + "%";
    document.getElementById("IndexSetChance3rdBookStat").innerHTML = (IndexSetOnlyStat[7] / 100) + "%";
    document.getElementById("IndexSetBossStat").innerHTML = (IndexSetOnlyStat[8] / 100) + "%";
    document.getElementById("IndexSetPrimateStat").innerHTML = (IndexSetOnlyStat[9] / 100) + "%";
    document.getElementById("IndexSetStaminaStat").innerHTML = (IndexSetOnlyStat[10] / 100) + "%";
    document.getElementById("IndexSetMoodStat").innerHTML = (IndexSetOnlyStat[11] / 100) + "%";
    document.getElementById("IndexSetUndeadStat").innerHTML = (IndexSetOnlyStat[12] / 100) + "%";
    document.getElementById("IndexSetDemonStat").innerHTML = (IndexSetOnlyStat[13] / 100) + "%";
    document.getElementById("IndexSetAnimalStat").innerHTML = (IndexSetOnlyStat[14] / 100) + "%";

    document.getElementById("IndexTotalEXPStat").innerHTML = ((IndexCostumeOnlyStat[0] + IndexWeaponOnlyStat[0] + IndexWingOnlyStat[0] + IndexMedalOnlyStat[0] + IndexSetOnlyStat[0]) / 100) + "%";
    document.getElementById("IndexTotalATKStat").innerHTML = ((IndexCostumeOnlyStat[1] + IndexWeaponOnlyStat[1] + IndexWingOnlyStat[1] + IndexMedalOnlyStat[1] + IndexSetOnlyStat[1]) / 100) + "%";
    document.getElementById("IndexTotalDEFStat").innerHTML = ((IndexCostumeOnlyStat[2] + IndexWeaponOnlyStat[2] + IndexWingOnlyStat[2] + IndexMedalOnlyStat[2] + IndexSetOnlyStat[2]) / 100) + "%";
    document.getElementById("IndexTotalHPStat").innerHTML = ((IndexCostumeOnlyStat[3] + IndexWeaponOnlyStat[3] + IndexWingOnlyStat[3] + IndexMedalOnlyStat[3] + IndexSetOnlyStat[3]) / 100) + "%";
    document.getElementById("IndexTotalCRITStat").innerHTML = ((IndexCostumeOnlyStat[4] + IndexWeaponOnlyStat[4] + IndexWingOnlyStat[4] + IndexMedalOnlyStat[4] + IndexSetOnlyStat[4]) / 100) + "%";
    document.getElementById("IndexTotalCriticalHitDamageStat").innerHTML = ((IndexCostumeOnlyStat[5] + IndexWeaponOnlyStat[5] + IndexWingOnlyStat[5] + IndexMedalOnlyStat[5] + IndexSetOnlyStat[5]) / 100) + "%";
    document.getElementById("IndexTotalSatietyStat").innerHTML = ((IndexCostumeOnlyStat[6] + IndexWeaponOnlyStat[6] + IndexWingOnlyStat[6] + IndexMedalOnlyStat[6] + IndexSetOnlyStat[6]) / 100) + "%";
    document.getElementById("IndexTotalChance3rdBookStat").innerHTML = ((IndexCostumeOnlyStat[7] + IndexWeaponOnlyStat[7] + IndexWingOnlyStat[7] + IndexMedalOnlyStat[7] + IndexSetOnlyStat[7]) / 100) + "%";
    document.getElementById("IndexTotalBossStat").innerHTML = ((IndexCostumeOnlyStat[8] + IndexWeaponOnlyStat[8] + IndexWingOnlyStat[8] + IndexMedalOnlyStat[8] + IndexSetOnlyStat[8]) / 100) + "%";
    document.getElementById("IndexTotalPrimateStat").innerHTML = ((IndexCostumeOnlyStat[9] + IndexWeaponOnlyStat[9] + IndexWingOnlyStat[9] + IndexMedalOnlyStat[9] + IndexSetOnlyStat[9]) / 100) + "%";
    document.getElementById("IndexTotalStaminaStat").innerHTML = ((IndexCostumeOnlyStat[10] + IndexWeaponOnlyStat[10] + IndexWingOnlyStat[10] + IndexMedalOnlyStat[10] + IndexSetOnlyStat[10]) / 100) + "%";
    document.getElementById("IndexTotalMoodStat").innerHTML = ((IndexCostumeOnlyStat[11] + IndexWeaponOnlyStat[11] + IndexWingOnlyStat[11] + IndexMedalOnlyStat[11] + IndexSetOnlyStat[11]) / 100) + "%";
    document.getElementById("IndexTotalUndeadStat").innerHTML = ((IndexCostumeOnlyStat[12] + IndexWeaponOnlyStat[12] + IndexWingOnlyStat[12] + IndexMedalOnlyStat[12] + IndexSetOnlyStat[12]) / 100) + "%";
    document.getElementById("IndexTotalDemonStat").innerHTML = ((IndexCostumeOnlyStat[13] + IndexWeaponOnlyStat[13] + IndexWingOnlyStat[13] + IndexMedalOnlyStat[13] + IndexSetOnlyStat[13]) / 100) + "%";
    document.getElementById("IndexTotalAnimalStat").innerHTML = ((IndexCostumeOnlyStat[14] + IndexWeaponOnlyStat[14] + IndexWingOnlyStat[14] + IndexMedalOnlyStat[14] + IndexSetOnlyStat[14]) / 100) + "%";
}
function StatManagement3() {
    IndexCostumeOnlyStat[0] = (500 * IndexCostumeDataText[0]) + (500 * IndexCostumeDataText[1]) + (500 * IndexCostumeDataText[2]);
    IndexCostumeOnlyStat[1] = (60 * IndexCostumeDataText[3]);
    IndexCostumeOnlyStat[1] += (60 * IndexCostumeDataText[4]) + (30 * IndexCostumeDataText[5]) + (30 * IndexCostumeDataText[6]) + (30 * IndexCostumeDataText[7]);
    IndexCostumeOnlyStat[1] += (30 * IndexCostumeDataText[8]) + (30 * IndexCostumeDataText[9]) + (30 * IndexCostumeDataText[10]) + (30 * IndexCostumeDataText[11]);
    IndexCostumeOnlyStat[1] += (60 * IndexCostumeDataText[12]) + (60 * IndexCostumeDataText[13]) + (60 * IndexCostumeDataText[14]) + (60 * IndexCostumeDataText[15]);
    IndexCostumeOnlyStat[1] += (60 * IndexCostumeDataText[16]) + (60 * IndexCostumeDataText[17]) + (60 * IndexCostumeDataText[18]) + (60 * IndexCostumeDataText[19]);
    IndexCostumeOnlyStat[1] += (30 * IndexCostumeDataText[20]) + (60 * IndexCostumeDataText[21]) + (60 * IndexCostumeDataText[22]) + (30 * IndexCostumeDataText[23]);
    IndexCostumeOnlyStat[2] = (100 * IndexCostumeDataText[24]) + (100 * IndexCostumeDataText[25]) + (100 * IndexCostumeDataText[26]) + (100 * IndexCostumeDataText[27]);
    IndexCostumeOnlyStat[2] += (100 * IndexCostumeDataText[28]) + (200 * IndexCostumeDataText[29]);
    IndexCostumeOnlyStat[3] = (80 * IndexCostumeDataText[30]) + (80 * IndexCostumeDataText[31]);
    IndexCostumeOnlyStat[3] += (80 * IndexCostumeDataText[32]) + (80 * IndexCostumeDataText[33]) + (80 * IndexCostumeDataText[34]) + (80 * IndexCostumeDataText[35]);
    IndexCostumeOnlyStat[3] += (80 * IndexCostumeDataText[36]) + (80 * IndexCostumeDataText[37]) + (80 * IndexCostumeDataText[38]) + (80 * IndexCostumeDataText[39]);
    IndexCostumeOnlyStat[3] += (160 * IndexCostumeDataText[40]) + (80 * IndexCostumeDataText[41]) + (80 * IndexCostumeDataText[42]) + (80 * IndexCostumeDataText[43]);
    IndexCostumeOnlyStat[3] += (80 * IndexCostumeDataText[44]) + (80 * IndexCostumeDataText[45]) + (80 * IndexCostumeDataText[46]) + (80 * IndexCostumeDataText[47]);
    IndexCostumeOnlyStat[3] += (80 * IndexCostumeDataText[48]) + (160 * IndexCostumeDataText[49]) + (80 * IndexCostumeDataText[50]) + (80 * IndexCostumeDataText[51]);
    IndexCostumeOnlyStat[3] += (160 * IndexCostumeDataText[52]) + (80 * IndexCostumeDataText[53]) + (80 * IndexCostumeDataText[54]) + (80 * IndexCostumeDataText[55]);
    IndexCostumeOnlyStat[3] += (80 * IndexCostumeDataText[56]) + (80 * IndexCostumeDataText[57]) + (160 * IndexCostumeDataText[58]) + (80 * IndexCostumeDataText[59]);
    IndexCostumeOnlyStat[3] += (80 * IndexCostumeDataText[60]) + (80 * IndexCostumeDataText[61]) + (80 * IndexCostumeDataText[62]) + (160 * IndexCostumeDataText[63]);
    IndexCostumeOnlyStat[3] += (80 * IndexCostumeDataText[64]) + (80 * IndexCostumeDataText[65]) + (160 * IndexCostumeDataText[66]) + (80 * IndexCostumeDataText[67]);
    IndexCostumeOnlyStat[3] += (80 * IndexCostumeDataText[68]) + (80 * IndexCostumeDataText[69]) + (80 * IndexCostumeDataText[70]);
    IndexCostumeOnlyStat[6] = (1000 * IndexCostumeDataText[71]);
    IndexCostumeOnlyStat[7] = (2000 * IndexCostumeDataText[72]);
    IndexCostumeOnlyStat[8] = (200 * IndexCostumeDataText[73]) + (200 * IndexCostumeDataText[74]);

    IndexWeaponOnlyStat[1] = (60 * IndexWeaponDataText[0]) + (60 * IndexWeaponDataText[1]) + (60 * IndexWeaponDataText[2]) + (60 * IndexWeaponDataText[3]);
    IndexWeaponOnlyStat[1] += (60 * IndexWeaponDataText[4]) + (60 * IndexWeaponDataText[5]) + (60 * IndexWeaponDataText[6]) + (60 * IndexWeaponDataText[7]);
    IndexWeaponOnlyStat[1] += (60 * IndexWeaponDataText[8]) + (60 * IndexWeaponDataText[9]) + (60 * IndexWeaponDataText[10]) + (60 * IndexWeaponDataText[11]);
    IndexWeaponOnlyStat[1] += (60 * IndexWeaponDataText[12]) + (60 * IndexWeaponDataText[13]) + (60 * IndexWeaponDataText[14]) + (60 * IndexWeaponDataText[15]);
    IndexWeaponOnlyStat[1] += (60 * IndexWeaponDataText[16]) + (60 * IndexWeaponDataText[17]) + (60 * IndexWeaponDataText[18]) + (60 * IndexWeaponDataText[19]);
    IndexWeaponOnlyStat[1] += (60 * IndexWeaponDataText[20]) + (60 * IndexWeaponDataText[21]) + (60 * IndexWeaponDataText[22]) + (60 * IndexWeaponDataText[23]);
    IndexWeaponOnlyStat[2] = (300 * IndexWeaponDataText[24]) + (300 * IndexWeaponDataText[25]) + (300 * IndexWeaponDataText[26]) + (300 * IndexWeaponDataText[27]);
    IndexWeaponOnlyStat[3] = (200 * IndexWeaponDataText[28]) + (200 * IndexWeaponDataText[29]) + (200 * IndexWeaponDataText[30]) + (200 * IndexWeaponDataText[31]);
    IndexWeaponOnlyStat[3] += (200 * IndexWeaponDataText[32]) + (200 * IndexWeaponDataText[33]) + (200 * IndexWeaponDataText[34]) + (200 * IndexWeaponDataText[35]);
    IndexWeaponOnlyStat[3] += (200 * IndexWeaponDataText[36]) + (200 * IndexWeaponDataText[37]) + (200 * IndexWeaponDataText[38]) + (200 * IndexWeaponDataText[39]);
    IndexWeaponOnlyStat[4] = (100 * IndexWeaponDataText[40]) + (100 * IndexWeaponDataText[41]) + (100 * IndexWeaponDataText[42]) + (100 * IndexWeaponDataText[43]);
    IndexWeaponOnlyStat[5] = (200 * IndexWeaponDataText[44]) + (200 * IndexWeaponDataText[45]) + (200 * IndexWeaponDataText[46]) + (200 * IndexWeaponDataText[47]);
    IndexWeaponOnlyStat[5] += (300 * IndexWeaponDataText[48]) + (300 * IndexWeaponDataText[49]) + (300 * IndexWeaponDataText[50]) + (300 * IndexWeaponDataText[51]);
    IndexWeaponOnlyStat[8] = (100 * IndexWeaponDataText[52]) + (100 * IndexWeaponDataText[53]) + (100 * IndexWeaponDataText[54]) + (100 * IndexWeaponDataText[55]);

    IndexWingOnlyStat[1] = (300 * IndexWingDataText[0]) + (150 * IndexWingDataText[1]) + (300 * IndexWingDataText[2]) + (300 * IndexWingDataText[3]);
    IndexWingOnlyStat[2] = (500 * IndexWingDataText[4]);
    IndexWingOnlyStat[3] = (500 * IndexWingDataText[5]) + (250 * IndexWingDataText[6]) + (500 * IndexWingDataText[7]);
    IndexWingOnlyStat[4] = (200 * IndexWingDataText[8]);
    IndexWingOnlyStat[5] = (500 * IndexWingDataText[9]) + (500 * IndexWingDataText[10]) + (500 * IndexWingDataText[11]);
    IndexWingOnlyStat[8] = (500 * IndexWingDataText[12]) + (500 * IndexWingDataText[13]);
    IndexWingOnlyStat[9] = (500 * IndexWingDataText[14]) + (500 * IndexWingDataText[15]);

    IndexMedalOnlyStat[1] = (300 * IndexMedalDataText[0]) + (300 * IndexMedalDataText[1]);
    IndexMedalOnlyStat[3] = (500 * IndexMedalDataText[2]) + (500 * IndexMedalDataText[3]);
    IndexMedalOnlyStat[4] = (100 * IndexMedalDataText[4]);
    IndexMedalOnlyStat[5] = (250 * IndexMedalDataText[5]) + (500 * IndexMedalDataText[6]);
    IndexMedalOnlyStat[6] = (1000 * IndexMedalDataText[7]);
    IndexMedalOnlyStat[10] = (1000 * IndexMedalDataText[8]);
    IndexMedalOnlyStat[11] = (1000 * IndexMedalDataText[9]);
    IndexMedalOnlyStat[8] = (500 * IndexMedalDataText[10]);

    let WeaponCollector_Berseker = 0;
    if (IndexWeaponDataText[24] == 1 && IndexWeaponDataText[44] == 1 && IndexWeaponDataText[28] == 1 && IndexWeaponDataText[0] == 1 && IndexWeaponDataText[40] == 1) {
        WeaponCollector_Berseker = 1;
    }
    let WeaponCollector_Berseker_2 = 0;
    if (IndexWeaponDataText[32] == 1 && IndexWeaponDataText[36] == 1 && IndexWeaponDataText[12] == 1 && IndexWeaponDataText[48] == 1) {
        WeaponCollector_Berseker_2 = 1;
    }
    let WeaponCollector_Paladin = 0;
    if (IndexWeaponDataText[25] == 1 && IndexWeaponDataText[45] == 1 && IndexWeaponDataText[29] == 1 && IndexWeaponDataText[1] == 1 && IndexWeaponDataText[41] == 1) {
        WeaponCollector_Paladin = 1;
    }
    let WeaponCollector_Paladin_2 = 0;
    if (IndexWeaponDataText[33] == 1 && IndexWeaponDataText[37] == 1 && IndexWeaponDataText[13] == 1 && IndexWeaponDataText[49] == 1) {
        WeaponCollector_Paladin_2 = 1;
    }
    let WeaponCollector_Sorcerer = 0;
    if (IndexWeaponDataText[27] == 1 && IndexWeaponDataText[47] == 1 && IndexWeaponDataText[31] == 1 && IndexWeaponDataText[3] == 1 && IndexWeaponDataText[43] == 1) {
        WeaponCollector_Sorcerer = 1;
    }
    let WeaponCollector_Sorcerer_2 = 0;
    if (IndexWeaponDataText[35] == 1 && IndexWeaponDataText[39] == 1 && IndexWeaponDataText[15] == 1 && IndexWeaponDataText[51] == 1) {
        WeaponCollector_Sorcerer_2 = 1;
    }
    let WeaponCollector_Ranger = 0;
    if (IndexWeaponDataText[26] == 1 && IndexWeaponDataText[46] == 1 && IndexWeaponDataText[30] == 1 && IndexWeaponDataText[2] == 1 && IndexWeaponDataText[42] == 1) {
        WeaponCollector_Ranger = 1;
    }
    let WeaponCollector_Ranger_2 = 0;
    if (IndexWeaponDataText[34] == 1 && IndexWeaponDataText[38] == 1 && IndexWeaponDataText[14] == 1 && IndexWeaponDataText[50] == 1) {
        WeaponCollector_Ranger_2 = 1;
    }
    let GrandmasterSet = 0;
    if (IndexCostumeDataText[18] == 1 && IndexWeaponDataText[52] == 1 && IndexWeaponDataText[53] == 1 && IndexWeaponDataText[54] == 1 && IndexWeaponDataText[55] == 1) {
        GrandmasterSet = 1;
    }
    let GrandmasterSet_2 = 0;
    if (IndexWingDataText[12] == 1 && IndexMedalDataText[1] == 1) {
        GrandmasterSet_2 = 1;
    }
    let HorrorSet = 0;
    if (IndexCostumeDataText[1] == 1 && IndexCostumeDataText[6] == 1 && IndexCostumeDataText[30] == 1) {
        HorrorSet = 1;
    }
    let HorrorSet_2 = 0;
    if (IndexCostumeDataText[46] == 1 && IndexCostumeDataText[55] == 1 && IndexCostumeDataText[58] == 1 && IndexWingDataText[4] == 1) {
        HorrorSet_2 = 1;
    }
    let GuildRaidConquerorSet = 0;
    if (IndexWeaponDataText[4] == 1 && IndexWeaponDataText[5] == 1 && IndexWeaponDataText[6] == 1 && IndexWeaponDataText[7] == 1 && IndexCostumeDataText[49] == 1) {
        GuildRaidConquerorSet = 1;
    }
    let GuildRaidConquerorSet_2 = 0;
    if (IndexWeaponDataText[8] == 1 && IndexWeaponDataText[9] == 1 && IndexWeaponDataText[10] == 1 && IndexWeaponDataText[11] == 1 && IndexCostumeDataText[52] == 1) {
        GuildRaidConquerorSet_2 = 1;
    }
    let GuildRaidConquerorSet_3 = 0;
    if (IndexCostumeDataText[63] == 1 && IndexWeaponDataText[16] == 1 && IndexWeaponDataText[17] == 1 && IndexWeaponDataText[18] == 1 && IndexWeaponDataText[19] == 1) {
        GuildRaidConquerorSet_3 = 1;
    }
    let SchoolUniformSet = 0;
    if (IndexCostumeDataText[8] == 1 && IndexCostumeDataText[41] == 1 && IndexCostumeDataText[72] == 1) {
        SchoolUniformSet = 1;
    }
    let SchoolUniformSet_2 = 0;
    if (IndexCostumeDataText[23] == 1 && IndexCostumeDataText[8] == 1 && IndexCostumeDataText[41] == 1) {
        SchoolUniformSet_2 = 1;
    }
    let ChildhoodProtectorSet = 0;
    if (IndexCostumeDataText[28] == 1 && IndexCostumeDataText[31] == 1 && IndexCostumeDataText[32] == 1 && IndexCostumeDataText[40] == 1) {
        ChildhoodProtectorSet = 1;
    }
    let ChildhoodProtectorSet_2 = 0;
    if (IndexCostumeDataText[51] == 1 && IndexCostumeDataText[54] == 1 && IndexCostumeDataText[60] == 1 && IndexWingDataText[6] == 1) {
        ChildhoodProtectorSet_2 = 1;
    }
    let WingCollector = 0;
    if (IndexWingDataText[14] == 1 && IndexWingDataText[9] == 1 && IndexWingDataText[8] == 1 && IndexWingDataText[5] == 1 && IndexWingDataText[0] == 1) {
        WingCollector = 1;
    }
    let WingCollector_2 = 0;
    if (IndexWingDataText[13] == 1 && IndexWingDataText[11] == 1 && IndexWingDataText[15] == 1 && IndexWingDataText[5] == 1 && IndexWingDataText[0] == 1) {
        WingCollector_2 = 1;
    }
    let ToolSet = 0;
    if (IndexWeaponDataText[44] == 1 && IndexWeaponDataText[45] == 1 && IndexWeaponDataText[46] == 1 && IndexWeaponDataText[47] == 1) {
        ToolSet = 1;
    }
    let OutlawSet = 0;
    if (IndexCostumeDataText[0] == 1 && IndexCostumeDataText[39] == 1 && IndexCostumeDataText[12] == 1) {
        OutlawSet = 1;
    }
    let FallenAngelSet = 0;
    if (IndexCostumeDataText[14] == 1 && IndexCostumeDataText[17] == 1 && IndexCostumeDataText[21] == 1) {
        FallenAngelSet = 1;
    }
    let DragonSlayerSet = 0;
    if (IndexCostumeDataText[4] == 1 && IndexWeaponDataText[12] == 1 && IndexWingDataText[13] == 1) {
        DragonSlayerSet = 1;
    }
    let _4SeasonsSet = 0;
    if (IndexCostumeDataText[43] == 1 && IndexCostumeDataText[35] == 1 && IndexCostumeDataText[36] == 1 && IndexCostumeDataText[42] == 1) {
        _4SeasonsSet = 1;
    }
    let EveningPartySet = 0;
    if (IndexCostumeDataText[29] == 1 && IndexCostumeDataText[7] == 1 && IndexCostumeDataText[26] == 1) {
        EveningPartySet = 1;
    }
    let SpringSet = 0;
    if (IndexCostumeDataText[43] == 1 && IndexCostumeDataText[11] == 1 && IndexWingDataText[14] == 1) {
        SpringSet = 1;
    }
    let GuardianSet = 0;
    if (IndexCostumeDataText[15] == 1 && IndexCostumeDataText[17] == 1) {
        GuardianSet = 1;
    }
    let WaterGamesSet = 0;
    if (IndexCostumeDataText[9] == 1 && IndexCostumeDataText[44] == 1 && IndexCostumeDataText[35] == 1) {
        WaterGamesSet = 1;
    }
    let TeaPartySet = 0;
    if (IndexCostumeDataText[24] == 1 && IndexCostumeDataText[11] == 1 && IndexCostumeDataText[37] == 1) {
        TeaPartySet = 1;
    }
    let ChefandIngredientsSet = 0;
    if (IndexCostumeDataText[7] == 1 && IndexCostumeDataText[27] == 1 && IndexCostumeDataText[38] == 1) {
        ChefandIngredientsSet = 1;
    }
    let AutumnBalladSet = 0;
    if (IndexCostumeDataText[45] == 1 && IndexWeaponDataText[28] == 1 && IndexWeaponDataText[31] == 1) {
        AutumnBalladSet = 1;
    }
    let SweetDreamlandSet = 0;
    if (IndexCostumeDataText[51] == 1 && IndexCostumeDataText[60] == 1 && IndexCostumeDataText[65] == 1) {
        SweetDreamlandSet = 1;
    }
    let DarkWitchSet = 0;
    if (IndexCostumeDataText[30] == 1 && IndexWeaponDataText[43] == 1 && IndexWingDataText[9] == 1) {
        DarkWitchSet = 1;
    }
    let ForceWeaponSet = 0;
    if (IndexWeaponDataText[40] == 1 && IndexWeaponDataText[41] == 1 && IndexWeaponDataText[42] == 1 && IndexWeaponDataText[43] == 1) {
        ForceWeaponSet = 1;
    }
    let WinterFairySet = 0;
    if (IndexCostumeDataText[42] == 1 && IndexWeaponDataText[25] == 1 && IndexWingDataText[8] == 1) {
        WinterFairySet = 1;
    }
    let GuildSet = 0;
    if (IndexWingDataText[0] == 1 && IndexMedalDataText[0] == 1) {
        GuildSet = 1;
    }
    let EvilHunterBandSet = 0;
    if (IndexWeaponDataText[28] == 1 && IndexWeaponDataText[29] == 1 && IndexWeaponDataText[30] == 1 && IndexWeaponDataText[31] == 1) {
        EvilHunterBandSet = 1;
    }
    let DreamyPartySet = 0;
    if (IndexCostumeDataText[59] == 1 && IndexCostumeDataText[43] == 1 && IndexWingDataText[15] == 1) {
        DreamyPartySet = 1;
    }
    let ArchangelSet = 0;
    if (IndexWeaponDataText[0] == 1 && IndexWeaponDataText[1] == 1 && IndexWeaponDataText[2] == 1 && IndexWeaponDataText[3] == 1 && IndexCostumeDataText[14] == 1) {
        ArchangelSet = 1;
    }
    let GreatDevilSet = 0;
    if (IndexWeaponDataText[12] == 1 && IndexWeaponDataText[13] == 1 && IndexWeaponDataText[14] == 1 && IndexWeaponDataText[15] == 1) {
        GreatDevilSet = 1;
    }
    let WinterLordSet = 0;
    if (IndexCostumeDataText[42] == 1 && IndexCostumeDataText[66] == 1 && IndexWingDataText[11] == 1) {
        WinterLordSet = 1;
    }
    let PrinceofDarknessGhostSet = 0;
    if (IndexWingDataText[7] == 1 && IndexWingDataText[3] == 1 && IndexMedalDataText[6] == 1) {
        PrinceofDarknessGhostSet = 1;
    }
    let WarmongerSet = 0;
    if (IndexCostumeDataText[5] == 1 && IndexCostumeDataText[4] == 1 && IndexCostumeDataText[16] == 1) {
        WarmongerSet = 1;
    }
    let GoldenGuardianAngelSet = 0;
    if (IndexCostumeDataText[13] == 1 && IndexWingDataText[5] == 1 && IndexMedalDataText[2] == 1) {
        GoldenGuardianAngelSet = 1;
    }
    let FoodieSet = 0;
    if (IndexWeaponDataText[32] == 1 && IndexWeaponDataText[33] == 1 && IndexWeaponDataText[34] == 1 && IndexWeaponDataText[35] == 1 && IndexWingDataText[1] == 1) {
        FoodieSet = 1;
    }
    let LovelyWeaponSet = 0;
    if (IndexWeaponDataText[48] == 1 && IndexWeaponDataText[49] == 1 && IndexWeaponDataText[50] == 1 && IndexWeaponDataText[51] == 1) {
        LovelyWeaponSet = 1;
    }
    let SnackWeaponSet = 0;
    if (IndexWeaponDataText[36] == 1 && IndexWeaponDataText[37] == 1 && IndexWeaponDataText[38] == 1 && IndexWeaponDataText[39] == 1) {
        SnackWeaponSet = 1;
    }
    let UniformSet = 0;
    if (IndexCostumeDataText[71] == 1 && IndexCostumeDataText[33] == 1) {
        UniformSet = 1;
    }
    let WinterPartySet = 0;
    if (IndexCostumeDataText[47] == 1 && IndexCostumeDataText[48] == 1 && IndexCostumeDataText[56] == 1) {
        WinterPartySet = 1;
    }
    let FairylandSet = 0;
    if (IndexCostumeDataText[59] == 1 && IndexCostumeDataText[20] == 1 && IndexCostumeDataText[19] == 1) {
        FairylandSet = 1;
    }
    let BeesJourneySet = 0;
    if (IndexCostumeDataText[22] == 1 && IndexCostumeDataText[11] == 1 && IndexCostumeDataText[20] == 1) {
        BeesJourneySet = 1;
    }
    let FrontYardConquestSet = 0;
    if (IndexMedalDataText[7] == 1 && IndexMedalDataText[8] == 1 && IndexMedalDataText[9] == 1 && IndexMedalDataText[5] == 1 && IndexMedalDataText[4] == 1) {
        FrontYardConquestSet = 1;
    }
    let AnimalSet = 0;
    if (IndexCostumeDataText[2] == 1 && IndexCostumeDataText[10] == 1 && IndexCostumeDataText[34] == 1 && IndexCostumeDataText[32] == 1) {
        AnimalSet = 1;
    }

    IndexSetOnlyStat[0] = 0;
    IndexSetOnlyStat[1] = (300 * SpringSet) + (200 * WeaponCollector_Berseker) + (100 * ToolSet) + (100 * OutlawSet) + (500 * WingCollector) + (300 * GuildRaidConquerorSet_2) + (300 * GrandmasterSet) + (500 * FallenAngelSet) + (500 * WingCollector_2) + (300 * DragonSlayerSet) + (200 * WeaponCollector_Berseker_2) + (300 * GoldenGuardianAngelSet) + (200 * FoodieSet) + (300 * LovelyWeaponSet) + (100 * SnackWeaponSet);
    IndexSetOnlyStat[2] = (800 * _4SeasonsSet) + (800 * WeaponCollector_Paladin) + (500 * EveningPartySet) + (500 * UniformSet) + (500 * SchoolUniformSet) + (800 * WinterPartySet) + (500 * SchoolUniformSet_2) + (800 * WeaponCollector_Paladin_2);
    IndexSetOnlyStat[3] = (800 * GuardianSet) + (500 * WaterGamesSet) + (500 * TeaPartySet) + (500 * ChefandIngredientsSet) + (500 * AutumnBalladSet) + (500 * SweetDreamlandSet) + (500 * FairylandSet) + (500 * BeesJourneySet) + (500 * WeaponCollector_Ranger_2);
    IndexSetOnlyStat[4] = (300 * DarkWitchSet) + (200 * ForceWeaponSet) + (200 * WeaponCollector_Ranger) + (100 * ChildhoodProtectorSet) + (200 * ChildhoodProtectorSet_2);
    IndexSetOnlyStat[5] = (700 * WinterFairySet) + (700 * GuildSet) + (500 * WeaponCollector_Sorcerer) + (300 * EvilHunterBandSet) + (700 * GrandmasterSet_2) + (500 * HorrorSet_2) + (1000 * GuildRaidConquerorSet_3) + (700 * DreamyPartySet) + (500 * WeaponCollector_Sorcerer_2);
    IndexSetOnlyStat[6] = 0;
    IndexSetOnlyStat[7] = 0;
    IndexSetOnlyStat[8] = (500 * ArchangelSet) + (500 * GreatDevilSet) + (500 * WinterLordSet) + (500 * PrinceofDarknessGhostSet) + (500 * GuildRaidConquerorSet);
    IndexSetOnlyStat[9] = (500 * WarmongerSet);
    IndexSetOnlyStat[10] = 0;
    IndexSetOnlyStat[11] = 0;
    IndexSetOnlyStat[12] = (500 * HorrorSet);
    IndexSetOnlyStat[13] = (500 * FrontYardConquestSet);
    IndexSetOnlyStat[14] = (500 * AnimalSet);
}
//--------------------------------------------------------------------------------------------------------------------Save Window Local Storage
function SaveIndexLocally() {
    let DataToSave = "Index____";
    let A = 0;
    IndexCostumeDataText.forEach(function () {
        DataToSave += "_" + IndexCostumeDataText[A];
        A = A + 1;
    });
    DataToSave += "____";
    let B = 0;
    IndexWeaponDataText.forEach(function () {
        DataToSave += "_" + IndexWeaponDataText[B];
        B = B + 1;
    });
    DataToSave += "____";
    let C = 0;
    IndexWingDataText.forEach(function () {
        DataToSave += "_" + IndexWingDataText[C];
        C = C + 1;
    });
    DataToSave += "____";
    let D = 0;
    IndexMedalDataText.forEach(function () {
        DataToSave += "_" + IndexMedalDataText[D];
        D = D + 1;
    });
    window.localStorage.setItem("Index", DataToSave);
}
function SavePageDataLocally() {
    let DataToSave = "Page Data_____";
    DataToSave += PageDataText[1];
    //DataToSave += "_____";
    window.localStorage.setItem("Page Data", DataToSave);
}
//--------------------------------------------------------------------------------------------------------------------Save Text File
function SaveTextFile() {
    var date = new Date();
    PageDataText[1] = date.getDate() + "." + (1 + date.getMonth()) + "." + date.getFullYear();

    let DataToSave = "";
    DataToSave += window.localStorage.getItem("Index");
    DataToSave += "\n";
    DataToSave += "Page Data_____" + PageDataText[1];

    SaveTextFile1(DataToSave);
}
async function SaveTextFile1(DataToSave) {
    let fileHandle;
    fileHandle = await window.showSaveFilePicker();
    let stream = await fileHandle.createWritable();
    await stream.write(DataToSave);
    await stream.close();
    alert("Text File Saved!");
    SaveTextFile2();
}
async function SaveTextFile2() {
    document.getElementById("LastSaveDate").innerHTML = "Last Save (" + PageDataText[1] + ")";
    SavePageDataLocally();
}
//--------------------------------------------------------------------------------------------------------------------Load Text File
function LoadTextFile() {
    let TextFileLoadedLine;
    var FR = new FileReader();
    FR.onload = function () {
        TextFileLoadedLine = FR.result.split('\n');
        alert("Text File Loaded!");
        window.localStorage.setItem("Index", TextFileLoadedLine[0]);
        window.localStorage.setItem("Page Data", TextFileLoadedLine[1]);
        window.location.reload();
    }
    FR.readAsText(document.getElementById("LoadTextFile").files[0]);
}
//--------------------------------------------------------------------------------------------------------------------
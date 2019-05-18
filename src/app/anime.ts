export class Anime {
    name: string;
    workName: string;
    source: string = "Blu-ray";
    resolution: string = "1080p";
    subtitleProvider: string;
    url: string;
    isNew: boolean = true;
    publishTime: any;
    isComplete: boolean = false;
    generalRanking: number = 5;
    magnetLink: string;

    // isUnranked() {
    //     return (this.generalRanking === 5);
    // }
    // getKey() {
    //     // Should transfer to magnetLink in the future
    //     return this.url;
    // }
    // isEqual(item) {
    //     if (this.url && item.url && (this.url === item.url)) {
    //         if (this.publishTime == item.publishTime) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    // static initialize(record) {
    //     var item = new Anime();
    //     Object.keys(record).forEach(function (attribute) {
    //         item[attribute] = record[attribute];
    //     });
    //     item.publishTime = new Date(item.publishTime);
    //     item.isNew = false;
    //     return item;
    // }
    // static sort(a, b) {
    //     var rankDiff = (a.generalRanking - b.generalRanking);
    //     if (rankDiff === 0) {
    //         return (b.publishTime.getTime() - a.publishTime.getTime());
    //     } else {
    //         return rankDiff;
    //     }
    // }
}
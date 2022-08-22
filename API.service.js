export class APIService {
    static Studio_GHIBLI_URL = "https://ghibliapi.herokuapp.com";
    static controller = new AbortController();

    static async getList(listName) {
        let res = await fetch(
            `${this.STUDIO_GHIBLI_URL}/${ListName.toLowerCase()}`,
            { signal: this.controller.signal }
        );

        if (res.ok) {
            return await res.json();
        } else {
            return false;
        }
    }
}

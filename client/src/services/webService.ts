export class WebService {
    constructor() {}

    public get = async (url: string) => {
        return fetch(url)
            .then((response) => {
                switch (response.status) {
                    case 200:
                        return response.text();
                    case 404:
                        throw response;
                }
            })
            .catch(function (response) {
                console.error(response.statusText);
            });
    };
}

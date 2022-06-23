import axios from 'axios';

// const token = 'qe/AxGCo1//WCzsOKZ18bD8C';

export const sleep = (ms) => new Promise(resolve=>setTimeout(resolve,ms))

async function basic(token: string){
    const data = {
        "appId": 1,
        "channelMasterId": 1,
        "channelToken": {
            "token": token
        }
    }
    return (await axios.post('https://as.hypergryph.com/u8/user/info/v1/basic', data)).data
}

export enum InquiryType {
    gacha = 'gacha',
    diamond = 'diamond',
    recent = 'recent',
}

async function inquiry(type:string,token:string,page:number,) { 
    if(type==='recent')return [];
    const params = { token, page, };
    return (await axios.get(`https://ak.hypergryph.com/user/api/inquiry/${type}`, {params})).data;
}

// for await(const d of iter(InquiryType.gacha, token) )console.log(d)  
export async function*  iter(type:string,token:string){
    for(const page of [...Array(11).keys()].map(i=>i+1)){
        const data = (await inquiry(type,token,page));
        if(data.code!==0)return;
        for(const d of data.data.list)yield d;
        if(data.data.list.length!==10)return;
    } 
}

(async function main() {
    console.log('start')
    const token = 'Zf43FimygP5Azv6rifJifVHA'
    console.log(await basic(token))
    console.log('end')
})();
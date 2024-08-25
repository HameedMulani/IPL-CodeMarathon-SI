import axios from "axios";
const url = 'http://localhost:5077/api/Ipl/matchstats';

// Function to retrieve all the Matches start
async function getMatchesStarts() {
    let data = null;
    try {
        let response = await axios.get(url);
        if (response.status === 200) {
            data = await response.data;
            console.log(data)
        }
    }
    catch (error) {
        return JSON.stringify(error);
    }
    return data;
}

 const highestPlayerURL = 'http://localhost:5077/api/Ipl/highestplayer'

// Function to retrieve all the Matches start
    async function getHigestPlayer() {
        let data = null;
        try {
            let response = await axios.get(highestPlayerURL);
            if (response.status === 200) {
                data = await response.data;
                console.log(data)
            }
        }
        catch (error) {
            return JSON.stringify(error);
        }
        return data;
    }
const urlcommon = 'http://localhost:5077/api/Ipl'
    const addPlayer = async (player) => {
        let data = null;
        try{
            let response = await axios.post(url, player);
            if(response.status === 200 && response.data !== null){
                data = await response.data;
            }
        }
        catch(error){
            return JSON.stringify(error);
        }
        return data
    }

    async function getMatchByDates(fromDate, toDate) {
        let data = null;
        try {
            let response = await axios.get(`${urlcommon}/matchbydates?fromDate=${fromDate}&toDate=${toDate}`);
            if (response.status === 200) {
                data = await response.data;
            }
        }
        catch (error) {
            return error;
        }
        return data;
    }
    

export {getMatchesStarts, getHigestPlayer, getMatchByDates, addPlayer}
const weatherInfo = (
    state = {
        counter: 0,
        weatherinfolist: [],
    },
    action,
) => {
    //check the action type
    if (action.type === "GET_WEATHER") {
        state = {
            counter: state.counter + 1,
            weatherinfolist: [
                ...state.weatherinfolist,
                {
                    id: state.counter + 1,
                    weatherDetails: action.payload,
                },
            ],
        };
    }
    if (action.type === "DELETE_CITY"){}
    return state;
};

export default weatherInfo;

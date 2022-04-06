import React, {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState
  } from 'react'
  import axios from 'axios'
  
  
  const categories = [
    "Self-help",
    "Horror",
    "Health/Fitness",
    "Non-Fiction",
    "Novel",
    "Literature"
  ];
  
  export const categoriesChecked = [{
      name: "Self-help",
      isTrue: false
    },
    {
      name: "Horror",
      isTrue: false
    },
    {
      name: "Health/Fitness",
      isTrue: false
    },
    {
      name: "Non-Fiction",
      isTrue: false
    },
    {
      name: "Novel",
      isTrue: false
    },
    {
      name: "Literature",
      isTrue: false
    }
  ];
  
  export const priceRangeData = [{
      name: "100-500",
      isTrue: false,
      maxValue: 500
    },
    {
      name: "500-1000",
      isTrue: false,
      maxValue: 1000
    },
    {
      name: "1000-1500",
      isTrue: false,
      maxValue: 1500
    },
    {
      name: "1500-2000",
      isTrue: false,
      maxValue: 2000
    }
  ];
  
  const filterContext = createContext(null);
  
  //cart Provider
  const FilterProvider = ({
    children
  }) => {
    const [data,setData]=useState([]);

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await axios.get("/api/products");
        setData(response.data.products)
      }
      catch(e){
        console.error(e);
      }  
    }
    fetchData();
  }, []);
    const [checkedList, setCheckedList] = useState(categoriesChecked);
    const [priceRangeCheckedList, setpriceRangeCheckedList] = useState(priceRangeData);
    const [isDataSorted, setIsDataSorted] = useState({
      IsSorted: false,
      Sort: ""
    });
    const [isDataCategorized, setIsDataCategorized] = useState({
      isFiltered: false
    });
  
    const [isDataFilteredByPrice, setIsDataFilteredByPrice] = useState({
      isFiltered: false
    });
  
    const [sliderRatingValue,setSliderRatingValue]=useState(5);
  
  
  
    //function for sorting low to high
    const lowToHigh = (state) => {
      return [...state].sort((a, b) => a.price - b.price);
    };
  
    //function for sorting high to low
    const highToLow = (state) => {
      return [...state].sort((a, b) => b.price - a.price);
    };
  
  
    //function for filter category wise
    const categoryCheckBox = (newData) => {
      const newArray = [...newData].filter((item) => {
        const isCheckedArray = checkedList.filter((obj) => {
          return obj.name === item.categoryName;
        });
        return isCheckedArray[0].isTrue === true;
      });
      if (newArray[0] === undefined) {
        return [];
      }
      return newArray;
    };
  
    //function for filtering price wise
    const priceCheckBox = (data) => {
      let filteredPriceRangeArray = [...data].filter((book) => {
        //book=one product
        const checkedPrice = priceRangeCheckedList.filter((item) => {
          return item.maxValue - 500 < book.price && book.price <= item.maxValue;
        });
        return checkedPrice[0].isTrue === true;
      });
      if (filteredPriceRangeArray[0] === undefined) {
        return [];
      }
      return filteredPriceRangeArray;
    };
  
  
    const filterByRating = (data, ratingValue) => {
    console.log(data, ratingValue)
      const filteredArray = data.filter(book => book.rating <= ratingValue)
      return filteredArray;
    }
  
  
  
    //reducer function
    const filterReducer = (state, action) => {
      switch (action.type) {
        case "LOW_TO_HIGH":
          setIsDataSorted({
            IsSorted: true,
            Sort: "LOW_TO_HIGH"
          });
          return lowToHigh(state);
  
        case "HIGH_TO_LOW": {
          setIsDataSorted({
            IsSorted: true,
            Sort: "HIGH_TO_LOW"
          });
          return highToLow(state);
        }
  
        case "checkBox":
          setIsDataCategorized({
            isFiltered: true
          });
          let newState = categoryCheckBox([...data]);
  
          if (newState[0] === undefined) {
            setIsDataCategorized({
              isFiltered: false
            });
            newState = [...data];
          }
  
          //code to check ,Is data filtered by category ?
          if (isDataFilteredByPrice.isFiltered) {
            newState = priceCheckBox(newState);
          }
  
          //code to check, Is data already sorted ?
          if (isDataSorted.IsSorted) {
            if (isDataSorted.Sort === "HIGH_TO_LOW") {
              newState = highToLow(newState);
            }
            if (isDataSorted.Sort === "LOW_TO_HIGH") {
              newState = lowToHigh(newState);
            }
          }
          newState = filterByRating(newState,Number(sliderRatingValue));
  
          return newState;
  
        case "priceRange":
          setIsDataFilteredByPrice({
            isFiltered: true
          });
          let newState2 = priceCheckBox([...data]);
  
          if (newState2[0] === undefined) {
            setIsDataFilteredByPrice({
              isFiltered: false
            });
            console.log("all price unchecked")
            newState2 = [...data];
          }
  
          if (isDataCategorized.isFiltered) {
            newState2 = categoryCheckBox(newState2);
          }
  
          if (isDataSorted.IsSorted) {
            if (isDataSorted.Sort === "HIGH_TO_LOW") {
              newState2 = highToLow(newState2);
            }
            if (isDataSorted.Sort === "LOW_TO_HIGH") {
              newState2 = lowToHigh(newState2);
            }
          }
          newState2 = filterByRating(newState2,Number(sliderRatingValue));
          return newState2;
  
        case "sortByRating":
          setSliderRatingValue(action.currentRating)
          let newState3 = filterByRating([...data], action.currentRating);
  
          if (isDataCategorized.isFiltered) {
            newState3 = categoryCheckBox(newState3);
          }
  
          //code to check ,Is data filtered by category ?
          if (isDataFilteredByPrice.isFiltered) {
            newState3 = priceCheckBox(newState3);
          }
  
          if (isDataSorted.IsSorted) {
            if (isDataSorted.Sort === "HIGH_TO_LOW") {
              newState3 = highToLow(newState3);
            }
            if (isDataSorted.Sort === "LOW_TO_HIGH") {
              newState3 = lowToHigh(newState3);
            }
          }
  
          return newState3;
  
  
        default:
          return [...state];
      }
    };
  
    const [state, dispatch] = useReducer(filterReducer, data);
  
  
    return ( <filterContext.Provider value = {
        {
          state,
          dispatch,
          checkedList,
          setCheckedList,
          categories,
          categoriesChecked,
          isDataSorted,
          setIsDataSorted,
          priceRangeCheckedList,
          setpriceRangeCheckedList
        }
      } > {
        children
      } </filterContext.Provider>
    )
  }
  
  const useFilter = () => useContext(filterContext);
  
  export {
    useFilter,
    FilterProvider
  }
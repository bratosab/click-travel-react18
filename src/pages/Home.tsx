import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { loadDestinations, selectDreamDestinations, selectDreamDestinationsMemo } from "../store/destination.slice";
import { useAppSelector } from "../hooks/useAppSelector";
import { getDestinations } from "../services/destination.service";
import { Destination } from "../models/destination.model";

export function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const destinations = useAppSelector(selectDreamDestinationsMemo);

  useEffect(() => {
    dispatch(loadDestinations());
  }, [dispatch]);

// const [destinations, setDestinations] = useState<Destination[]>([])

//   useEffect(() => {
//     getDestinations().then(dest => {
//         setDestinations(dest)
//     })
//   }, []);

  return (
    <>
      {destinations &&
        destinations.map((dest) => (
          <button key={dest.code}>{dest.name}</button>
        ))}
    </>
  );
}

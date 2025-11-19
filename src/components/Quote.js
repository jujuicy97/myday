import { useEffect, useState } from "react";

const quotes = [
  "Act now, or rush later for what you delayed.",
  "Believing in yourself makes things possible.",
  "Success happens when prep meets opportunity.",
  "Keep going. No matter how slow, don't stop.",
  "This moment is the most precious time.",
  "Small habits lead to big changes.",
  "Start now—greatness begins with small steps.",
  "Keep showing up through the difficult days.",
  "Trying is always braver than staying afraid.",
  "Failure is just a step closer to success."
];

const Quote = () => {
  const [quote,setQuote] = useState('');
  useEffect(()=>{
    //random은 0~1을 가짐 length로 만들려면 1*length해줘야함
    const random = Math.floor(Math.random()*quotes.length); 
    setQuote(quotes[random]);
  },[]);
  return (
    <div className="quote">
      Today's Quote : "{quote}"
    </div>
  );
};

export default Quote;
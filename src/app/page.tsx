import Image from "next/image";
import logo from "@/assets/WhatsApp Image 2026-01-28 at 9.38.54 AM.jpeg";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import { Send } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-black w-full py-5">
      <div className="max-w-3xl mx-auto bg-secondary-foreground p-3 space-y-6  inset-shadow-2xs">
        <Image
          src={logo}
          alt="logo"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <p className="text-center text-card font-bold">
          Satta Matka Main 100% Bada Paisa Jitna chahte Hai To{" "}
          <br className="md:block hidden" />
          Hamara Telegram Channel Joine Kre <br className="md:block hidden" />
          Aaj Hi Bilkul Free
        </p>
        <Button className="rounded-md w-full uppercase font-bold py-7" asChild>
        
            <a
    href="https://t.me/+nSKSfeVRtBxmYWVl"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3"
  >
   <Send />

    <span> Join Telegram Channel</span>
  </a>
        </Button>
        <p className="text-card text-center font-bold">
          FIX OPEN, CLOSE, JODI AND PANEL. ✌⚡
        </p>
        <div className="w-full p-3 bg-red-400">
          <p className="text-card text-center font-bold">
            India.s best SATTA MATKA CHANNEL
          </p>
        </div>
        <p className="text-card text-center font-bold">
          ALL MATKA GAME AVAILABLE
        </p>
        <p className="text-card text-center font-bold">
          KALYAN MILAN, MAIN BAZAR TIME BAZAR SRIDEVI,, RAJDHANI
        </p>
      <Button className="rounded-md uppercase font-bold py-7 w-full " asChild>
  <a
    href="https://t.me/+nSKSfeVRtBxmYWVl"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3"
  >
     <span>Join FREE Now</span>
   <Send />

   
  </a>
</Button>

        <p className="text-card text-center font-bold">
          🥇 DALY 5-7 GAME PASS BY OUR EXPERT 🥇
        </p>

        <Countdown targetDate="2026-02-01T00:00:00" />
      </div>
    </div>
  );
}

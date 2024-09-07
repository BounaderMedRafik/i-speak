import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CreditCard, Star } from "lucide-react";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";

const PayWall = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("");
  const [GoldenCard, setGoldenCard] = useState("");
  const [ccv, setCvv] = useState("");
  const [everythingChecked, setEverythingChecked] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const hundleChecking = () => {
    if (!name || !GoldenCard || !ccv) {
      setError(true);
    } else {
      setEverythingChecked(true);
      router.refresh();
    }
  };

  return (
    <div className="relative">
      {everythingChecked ? null : (
        <div className=" bg-background/50 flex justify-center absolute  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full md:w-[120%] h-full z-20  backdrop-blur-lg">
          <div className="mt-24 p-5 bg-background h-fit rounded-2xl">
            <h4 className=" max-w-md text-center font-bold">
              You're currently using the free tier of our service. To access
              this content, please upgrade to our premium plan.
            </h4>
            <Dialog>
              <div className="mt-3 flex  justify-center">
                <DialogTrigger asChild>
                  <Button variant={"secondary"}>
                    <div className="flex items-center justify-center gap-3 ">
                      <div>Change To Premium</div>
                      <div>
                        <Star size={15} />
                      </div>
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <div className="flex items-center justify-between pt-4">
                        <div>Premiuem Plan</div>
                        <div className="text-xl">2500DA</div>
                      </div>
                    </DialogTitle>
                    <div className="text-sm mt-2 opacity-75 max-w-xs">
                      Enjoy personalized English tutoring, unlimited access to
                      resources, and expert guidance.
                    </div>
                  </DialogHeader>

                  <div>
                    <div className="text-sm opacity-75 font-bold">Name</div>
                    <div className="mt-2">
                      <Input
                        type="text"
                        placeholder="Bounader Mohamed Rafik"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-sm opacity-75 font-bold flex items-center gap-3">
                      <div>Billing Card Information</div>
                      <div>
                        <CreditCard size={14} />
                      </div>
                    </div>
                    <div className="mt-2">
                      <Input
                        type="number"
                        placeholder="2345 • 9584 • 3984 • 6912"
                        value={GoldenCard}
                        onChange={(e) => {
                          setGoldenCard(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="text-sm opacity-75 font-bold flex items-center gap-3">
                      <div>CCV</div>
                      <div>
                        <CreditCard size={14} />
                      </div>
                    </div>
                    <div className="mt-2">
                      <Input
                        type="number"
                        placeholder="06/19"
                        value={ccv}
                        onChange={(e) => {
                          setCvv(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  {error ? (
                    <div className="text-destructive text-sm">
                      Please Fill The Field necessary
                    </div>
                  ) : null}
                  <div className="flex items-center gap-2">
                    <Button onClick={hundleChecking}>Confirm!</Button>
                    <DialogClose asChild>
                      <Button variant={"secondary"}>Close</Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </div>
            </Dialog>
          </div>
        </div>
      )}

      <div>{children}</div>
    </div>
  );
};

export default PayWall;

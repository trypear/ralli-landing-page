import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-white-50 lg:bg-[#FBFBFB]">
      <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

      <div className="flex items-center justify-center lg:pb-8">
        <span className="max-w-md text-center text-4xl font-medium lg:max-w-2xl lg:text-[44px] lg:font-semibold">
          Ralli Makes Group Planning Easy
        </span>
      </div>

      <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

      <div className="items-center justify-center lg:flex-col lg:bg-[#FBFBFB] lg:px-6 lg:pb-14">
        <div className="mx-auto w-full max-w-3xl rounded-xl px-3 lg:max-w-[1049px] lg:bg-[#F4F4F4] lg:p-7">
          <div className="grid items-start lg:grid-cols-2">
            <div className="space-y-2">
              <span className="text-2xl font-medium leading-tight">
                Ralli AI Assistant
              </span>
              <p className="text-base text-[#666666]">
                Smart AI that helps you plan the perfect group activities. From
                suggesting venues to coordinating schedules, Ralli AI
                understands your group&apos;s preferences and makes planning
                effortless with intelligent recommendations.
              </p>
            </div>

            <div className="space-y-3 pt-7 lg:pl-10 lg:pt-0">
              <div className="flex items-center gap-2 rounded-xl border-2 border-[#A1DB4B] bg-[#B3F353] px-4 py-5 opacity-80">
                <span className="font-medium">Ralli AI</span>
                <span className="font-mono font-medium text-[#666666]">
                  94.10
                </span>
              </div>

              <div className="flex w-[75%] items-center gap-2 rounded-xl bg-[#e6e6e6] px-4 py-5">
                <span className="font-medium">GPT-4o</span>
                <span className="font-mono font-medium text-[#666666]">
                  80.53
                </span>
              </div>

              <div className="flex w-[41%] items-center gap-2 rounded-xl bg-[#e6e6e6] px-4 py-5">
                <span className="text-nowrap font-medium">
                  Meta Llama 3.1 405b
                </span>
                <span className="font-mono font-medium text-[#666666]">
                  80.43
                </span>
              </div>

              <div className="flex w-[23%] items-center gap-2 rounded-xl bg-[#e6e6e6] px-4 py-5">
                <span className="whitespace-nowrap font-medium">
                  Claude 3 Opus
                </span>
                <span className="font-mono font-medium text-[#666666]">
                  76.74
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

        {/* //Section 1 */}
        <div className="mx-auto grid w-full lg:mt-5 lg:max-w-[1049px] lg:grid-cols-2 lg:gap-5">
          <div className="mx-auto w-full max-w-3xl rounded-xl px-3 pb-0 lg:bg-[#F4F4F4] lg:px-0 lg:pt-7">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-1 lg:space-y-2 lg:px-7">
                <div className="flex flex-col justify-between gap-1 lg:flex-row lg:items-end lg:gap-0">
                  <span className="text-2xl font-medium">
                    Event Creator <br />{" "}
                  </span>
                  <span className="flex text-base font-normal lg:hidden">
                    (Coming Soon)
                  </span>
                  <span className="mb-1 text-[#b3b3b3]">
                    Powered by Ralli AI
                  </span>
                </div>
                <span className="hidden text-base font-normal lg:flex">
                  (Coming Soon)
                </span>
                <p className="text-base text-[#666666]">
                  Create amazing group events from scratch! Ralli helps you plan
                  memorable experiences with smart suggestions and coordinated
                  logistics.
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <Image
                  src="/images/PearAICreatorVector.svg"
                  alt="PearAI Creator"
                  className="h-full w-full"
                  width={240}
                  height={240}
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 block h-28 bg-gradient-to-t from-[#FFFFFF] to-transparent lg:hidden"></div>
              </div>
            </div>
          </div>

          <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

          <div className="mx-auto w-full max-w-3xl rounded-xl px-3 pb-0 lg:bg-[#F4F4F4] lg:p-7 lg:pb-0">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-1 lg:space-y-2">
                <div className="flex flex-col justify-between gap-1 lg:flex-row lg:items-end lg:gap-0">
                  <span className="text-2xl font-medium">
                    Group Coordinator
                  </span>
                  <span className="mb-1 text-[#b3b3b3]">
                    Powered by Ralli AI
                  </span>
                </div>
                <p className="text-base text-[#666666]">
                  Intelligent coordinator that manages invitations, RSVPs, and
                  keeps everyone in the loop automatically.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/PearAIAgentVector.svg"
                  alt="PearAI Agent"
                  className="h-auto w-full lg:pb-7"
                  width={240}
                  height={240}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

        {/* //Section 2 */}
        <div className="mx-auto grid w-full lg:mt-5 lg:max-w-[1049px] lg:grid-cols-2 lg:gap-5">
          <div className="mx-auto w-full max-w-3xl rounded-xl px-3 pb-0 lg:bg-[#F4F4F4] lg:p-7 lg:pb-0">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-1 lg:space-y-2">
                <div className="flex flex-col justify-between gap-1 lg:flex-row lg:items-end lg:gap-0">
                  <span className="text-2xl font-medium">Group Chat</span>
                  <span className="flex text-base font-normal lg:hidden">
                    (Coming Soon)
                  </span>
                  <span className="mb-1 text-[#b3b3b3]">Powered by Ralli</span>
                </div>
                <span className="hidden text-base font-normal lg:flex">
                  (Coming Soon)
                </span>
                <p className="text-base text-[#666666]">
                  Keep your group connected with integrated chat features. Share
                  updates, coordinate last-minute changes, and keep everyone
                  engaged.
                </p>
              </div>
              <div className="relative flex-col items-center justify-center">
                <Image
                  src="/images/PearAILoginVector.svg"
                  alt="PearAI Creator"
                  className="h-auto w-full lg:pb-7"
                  width={240}
                  height={240}
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 h-28 bg-gradient-to-t from-[#FFFFFF] to-transparent lg:from-[#F4F4F4]"></div>
              </div>
            </div>
          </div>

          <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>

          <div className="mx-auto w-full max-w-3xl rounded-xl pb-0 lg:bg-[#F4F4F4] lg:p-7 lg:pb-0">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-0 px-3 lg:space-y-2 lg:px-0">
                <div className="flex flex-col justify-between gap-1 lg:flex-row lg:items-end lg:gap-0">
                  <span className="text-2xl font-medium">Event Sharing</span>
                  <span className="flex text-base font-normal lg:hidden">
                    (Coming Soon)
                  </span>
                  <span className="mb-1 text-[#b3b3b3]">Powered by Ralli</span>
                </div>
                <span className="hidden text-base font-normal lg:flex">
                  (Coming Soon)
                </span>
                <p className="text-base text-[#666666]">
                  Share your events with friends and family. Create beautiful
                  event pages that make it easy for everyone to stay informed.
                </p>
              </div>
              <div className="relative flex items-center justify-center">
                <Image
                  src="/images/PearAILaunchVector.svg"
                  alt="PearAI Agent"
                  className="h-auto w-full"
                  width={240}
                  height={240}
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 block h-28 bg-gradient-to-t from-[#FFFFFF] to-transparent lg:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[30px] block h-3 w-full bg-[#F4F4F4] lg:hidden"></div>
    </div>
  );
}

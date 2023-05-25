import { useState } from "react";

var nouns = ["girl", "boy", "man", "woman", "animal", "kitty", "dog"];
var adjectives = ["giant", "tiny", "funny", "sad", "strange", "cute", "dumb"];
var verbs = [
  "jumping",
  "running",
  "exploding",
  "dying",
  "laughing",
  "awesome",
  "stupid",
];

export default function Support() {
  const [prompt, setPrompt] = useState();
  const [botchat, setBotChat] = useState();
  const [state, setState] = useState(true);
  const handleChange = (e) => {
    setPrompt(e.target.value);
    console.log(prompt);
  };
  const [data, setData] = useState([
    {
      Human:
        "I would like my money back due to a life situation, could you do that?",
      Bot: "Sure, give me your email or id. We'll pay you back on your card",
    },
  ]);
  const handleClick = () => {
    var randIndex = Math.floor(Math.random() * 7);
    var noun = nouns[randIndex];
    var adjective = adjectives[randIndex];
    var verb = verbs[randIndex];

    ///////////////////////////

    setState(false);

    const list = "The " + adjective + " " + noun + " is " + verb + ".";
    const newData = {
      Human: list,
      Bot: prompt
        ? botchat
        : "I'm sorry, I need more information about what you are looking for. Can you please provide more context or a specific question?",
    };
    setData([...data, newData]);
  };

  return (
    <>
      <div style={{ height: "96.5%" }}>
        <div className="rounded-[30px] border-[#16191f] border-spacing-1 border-[2px] shadow-xl py-[24px] px-[24px] w-full h-full">
          <div className="flex justify-between">
            <p className="text-[#4D5E80] text-[13px] font-medium  flex  items-center">
              Live Chat
            </p>
            <select
              id="language"
              class="bg-black flex justify-between items-center  p-2.5 text-[13px]"
            >
              <option selected>Period Selection</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <p className="text-[18px] font-medium text-white justify-center flex">
            Live Chat
          </p>
          <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4 ">
            <div class="flex flex-col h-[690px] overflow-x-auto mb-4">
              <div class="flex flex-col h-full">
                <div class="grid grid-cols-12 gap-y-2">
                  {data.map((item) => {
                    return (
                      <>
                        <div class="col-start-6 col-end-13 p-3 rounded-lg">
                          <div class="flex items-center justify-start flex-row-reverse">
                            <div class="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0">
                              <img src="/man.png" alt="man" />
                            </div>
                            <div class="relative mr-3 text-sm bg-[#0F1522] py-2 px-4 shadow rounded-[4px]">
                              <div>{item.Human}</div>
                            </div>
                          </div>
                          <span className="text-[#6B7A99] text-[10px]">
                            1 min ago
                          </span>
                        </div>
                        <div class="col-start-1 col-end-8 p-3 rounded-lg">
                          <div class="flex items-center justify-start">
                            <div class="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0">
                              <img src="/bot.png" alt="bot" />
                            </div>
                            <div class="relative ml-3 text-sm bg-[#0F1522] py-2 px-4 shadow rounded-xl">
                              <div>{item.Bot}</div>
                            </div>
                          </div>
                          <span className="text-[#6B7A99] text-[10px]">
                            1 min ago
                          </span>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="flex text-[12px] text-[#6B7A99] opacity-95 justify-between items-center">
                  <hr className="w-full opacity-90" />
                  <span className="w-full flex justify-center">
                    LagX has closed this request
                  </span>
                  <hr className="w-full opacity-90" />
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <img src="/note_add.png" alt="note_add" />
              </div>
              <input
                id="url"
                class="block text-white w-full pl-12 p-4 text-sm bg-[#0F1522] rounded-[8px]"
                placeholder="Send your message"
                onChange={handleChange}
                value={prompt}
                required
              />
              <img
                onClick={handleClick}
                className="absolute right-2.5 bottom-2.5"
                src="/send.png"
                alt="send"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

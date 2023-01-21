import React, {useCallback, useMemo} from "react";
import {Configuration, OpenAIApi} from "openai";

const OAI = () => {

  const text = "Improve the text of my work experience: I worked as a used parts salesman for four years. Every day I had to process dozens of bids and make quotes. My duties also included organizing the transportation of parts from Lithuania or Poland to Estonia."
  const configuration = useMemo(() => new Configuration({
    apiKey: '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',
  }), []);
  const openai = useMemo(() => new OpenAIApi(configuration), [configuration])

  const OAI = useCallback(async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: ["You:"],
    });
    return response;
  }, [openai]);

  OAI().then(r => {
    console.log('r ----', r?.data?.choices[0]?.text);
  }).catch(e => {
    console.log(e);
  })
}

export default OAI
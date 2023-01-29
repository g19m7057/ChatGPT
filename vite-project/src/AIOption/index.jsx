export const arrayItems = [
    {
        key: 'Q&A',
        id:'q&a',
        description:'Answer questions',
        option:{
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\n"],     
        }
    },
    {
        key:"Python to natural language",
        id:'p2n',
        description:"explains python code in a readable sentance",
        option:{
            model: "code-davinci-002",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        key:"Explain Code",
        id:"explain code",
        description:"Explains code entered by the user",
        option:{
            model: "code-davinci-002",
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["\"\"\""],
        }
    },
    {
        key:"Grammar Corrector",
        id:"grammar corrector",
        description:"Corrects grammar in sentences",
        option:{
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    },
    {
        key:"Translate from English to other languages",
        id:"translate",
        description:"Translate from english to any other language",
        option:{
            model: "text-davinci-003",
            temperature: 0.3,
            max_tokens: 100,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }
    }

]
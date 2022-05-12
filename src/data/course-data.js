const courseData = {
  activity_01: {
    article: {
      title: "Unbelievable scientific breakthrough uncovers snakes in New Zealand! Have we been lied to?",
      title_correct: "Tradesperson uncovers scake remains on construction site. questions remain as to its origin.",
      subtitle: "The shock discovery that no one saw coming.",
      image: {
        src: "./images/snake-1000x500.jpg",
        alt: "snake",
      },
      content: "<p>MATAMATA - the discovery made by a construction worker has the local community searching for answers.</p><p>Digger operator Kevin Billington, 62, couldn't believe his eyes after he unearthed the remains of what he suspects is a snake early on Tuesday morning.</p><p>'You're gonna find some strange stuff when you're digging. It comes with the territory,&rsquo; said Billington. &lsquo;I've seen my fair share of bones, even the odd coffin. But something told me this one was different.&rsquo;</p><p>After realising what he had discovered, Billington and a few of his colleagues managed to carefully excavate the 80 centimetre skeleton from the site.</p><p>While some locals believe it's likely the skeleton is in fact an eel that has been caught from a nearby river and discarded on the site, others aren't so convinced.</p><p>One woman believed further investigation was required, saying, &lsquo;Snakes have been around for ages, so it was only a matter of time before we found them here&rsquo;.</p><p>Home to the fabled Hobbiton, Matamata is no stranger to the limelight. With the latest discovery bringing hordes of attention to the small town, eager residents are already looking to capitalise on the potential economic opportunity.</p><p>&lsquo;Snakes and Hobbits, what more could you want?&rsquo; said one guy.</p><p>Well then â€“ does New Zealand have snakes? Will Matamata finally have a new tourist attraction? Is this just a stupid fake news article? These are the questions. You decide.</p><p><b>Have you seen a snake? Contact Your News Bulletin on 0508 638 723.</b></p>",
    },
    quiz: {
      id: "q1",
      question: "<span>Have a read through the article. Does anything seem a little fishy?</span> <span style='color:#16b3b9'>What do you think this is an example of?</span>",
      instruction: "Scroll through the article to the left. Click on the correct answer below.",
      items: [
        { text: "A. Satire/Irony", isCorrect: false },
        { text: "B. Clickbait", isCorrect: true },
        { text: "C. Propaganda", isCorrect: false }
      ],
      feedback: {
        correct: {
          text: "Got it in one!",
          message: {
            title: "Yup, it's definitely clickbait.",
            text: "<p>Clickbait articles use triggering words and phrases to reel in the clicks. In this case, the language in the headline attempts to provoke the reader into finding out more.</p><p>Good rule of thumb; If the headline makes you angry or sad or LOL, then you have good reason to be skeptical. Always read beyond the headline.</p>",
          }
        },
        incorrect: {
          text: "So close!",
          message: {
            title: "Nope, it's actually clickbait.",
            text: "<p>Clickbait articles use triggering words and phrases to reel in the clicks. In this case, the language in the headline attempts to provoke the reader into finding out more.</p><p>Good rule of thumb; If the headline makes you angry or sad or LOL, then you have good reason to be skeptical. Always read beyond the headline.</p>",
          }
        },
        button: {
          text: "What's a more neutral headline?"
        }
      },
      remember: {
        title: "Remember",
        text: "<h2>Reputable news outlets normally have more neutral headlines.</h2>",
        button: {
          text: "start again"
        }
      }
    }
  }
};
export default courseData;
class FounderQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.playerName = '';
        this.story = [];
        
        this.questions = [
            {
                question: "You’re building your prototype. What do you hack it together with?",
                options: [
                    { text: "A Raspberry Pi strapped to a cereal box", type: 'hacker', story: "Your first prototype, a glorious mess of wires and cardboard, was born. {name} called it 'Project CerealBox,' and it technically worked... once." },
                    { text: "A 50-tab Google Sheet with conditional formatting sorcery", type: 'hype', story: "With the finesse of a spreadsheet wizard, {name} created a 'database' so complex it brought Google's servers to their knees. It was beautiful, terrifying, and barely functional." },
                    { text: "Sticky notes and blind optimism", type: 'chaos', story: "The MVP was a wall of colorful sticky notes. {name} insisted it was an 'agile, physical-first user experience.' Investors were... confused." },
                    { text: "A no-code app that breaks if you sneeze near it", type: 'cliche', story: "{name} proudly presented a sleek no-code app. The demo went perfectly, as long as no one in a 5-mile radius sneezed, which would cause a server-wide crash." }
                ]
            },
            {
                question: "First investor pitch, your style is:",
                options: [
                    { text: "97 slides of graphs, no product", type: 'hacker', story: "{name}'s pitch deck was a masterpiece of data visualization. 97 slides later, the investors had no idea what the product was, but they were deeply impressed by a pie chart." },
                    { text: "“We’re basically the Uber of AI” (and hope they buy it)", type: 'hype', story: "Boldly, {name} declared the company 'the Uber of AI.' The investors nodded sagely, having heard the same pitch six times that day. They were in." },
                    { text: "A live demo that immediately crashes", type: 'chaos', story: "The live demo was going great until it wasn't. As the app crashed spectacularly, {name} called it an 'interactive demonstration of our robust error-handling protocols.'" },
                    { text: "Just Elon quotes and rocket emojis", type: 'cliche', story: "{name}'s pitch was simple: a single slide with a picture of Elon Musk and three rocket emojis. They secured $10 million." }
                ]
            },
            {
                question: "You land your first engineer. Who is it?",
                options: [
                    { text: "Your mate who once installed Minecraft mods", type: 'hacker', story: "The first hire was a success! {name}'s mate, a seasoned veteran of Minecraft modding, managed to rewrite the entire backend in a language he invented himself." },
                    { text: "A “10x dev” who refuses to use Git", type: 'hype', story: "You hired a self-proclaimed '10x dev.' They work 20 hours a day, refuse to use Git, and communicate only in binary. Your codebase is now a work of incomprehensible genius." },
                    { text: "The cheapest option on Fiverr", type: 'chaos', story: "To save money, {name} hired the cheapest engineer on Fiverr. Communication was tough, but the code was... creative. And mostly functional. Sometimes." },
                    { text: "A cousin who thinks Python is just a snake", type: 'cliche', story: "Family first. {name} hired their cousin, who, despite a steep learning curve, now proudly lists 'Reptile.js' on their LinkedIn profile." }
                ]
            },
            {
                question: "Office setup vibe:",
                options: [
                    { text: "IKEA desks held up by energy drink cans", type: 'hacker', story: "The office had a certain... structural integrity, with desks propped up by towers of empty energy drink cans. {name} called it 'caffeine-based architecture.'" },
                    { text: "Beanbags + one lonely standing desk", type: 'hype', story: "The office was 90% beanbags. It looked great on the website, but productivity plummeted as everyone kept falling asleep. {name} didn't mind." },
                    { text: "Two monitors each, no WiFi", type: 'chaos', story: "Every engineer had two monitors, but the office WiFi was a myth. {name} insisted it built character and encouraged 'offline-first development.'" },
                    { text: "A garage with suspicious extension cords", type: 'cliche', story: "{name} embraced the classic startup garage. It was cold, damp, and powered by a daisy-chain of extension cords that was definitely a fire hazard." }
                ]
            },
            {
                question: "Your first paying customer, how do you celebrate?",
                options: [
                    { text: "Ring the office gong you bought just for this moment", type: 'hacker', story: "The mighty office gong was struck! The sound echoed through the halls, celebrating the arrival of actual, real revenue. {name} felt like a true warrior nerd." },
                    { text: "Send a press release to TechCrunch (they don’t reply)", type: 'hype', story: "A press release was dispatched to every major tech blog. The silence was deafening, but {name} was already updating their LinkedIn to 'As Seen In... (Probably).'" },
                    { text: "Pop open a bottle of supermarket prosecco in paper cups", type: 'chaos', story: "{name} celebrated with warm prosecco in paper cups. It was messy, undignified, and absolutely perfect." },
                    { text: "Immediately ask them for a testimonial and make it your homepage", type: 'cliche', story: "Before the customer could even log in, {name} had already asked for a glowing testimonial. It now sits proudly on the homepage, in quotes." }
                ]
            },
            {
                question: "Growth hack of choice:",
                options: [
                    { text: "Automating everything with duct-tape scripts", type: 'hacker', story: "{name} built a labyrinth of Python scripts held together with digital duct tape. It was fragile, but it automated everything from marketing emails to making coffee." },
                    { text: "Pretending every client is “Fortune 500”", type: 'hype', story: "'Our clients include several Fortune 500 companies,' {name} announced, conveniently omitting that they just bought a coffee from Starbucks." },
                    { text: "Running TikTok ads with no product yet", type: 'chaos', story: "Why wait for a product? {name} launched a viral TikTok campaign for a product that didn't exist, creating massive hype and a very confused audience." },
                    { text: "Hiring an “intern army” paid in pizza", type: 'cliche', story: "An army of unpaid interns, fueled by pizza and promises of 'exposure,' became the backbone of {name}'s growth strategy. It was ethically questionable but highly effective." }
                ]
            },
            {
                question: "Series A pitch highlight:",
                options: [
                    { text: "A blockchain diagram no one understands", type: 'hacker', story: "{name} presented a slide with a blockchain diagram so complex, it silenced the room. No one understood it, but everyone was too afraid to ask. Funding secured." },
                    { text: "Buzzwords: “synergy,” “scale,” “machine learning”", type: 'hype', story: "The pitch was a symphony of buzzwords. 'Synergy,' 'disruption,' 'machine learning,' 'paradigm shift.' The VCs ate it up. {name} walked out with a blank check." },
                    { text: "Actual revenue numbers (rare)", type: 'chaos', story: "In a shocking twist, {name} presented a slide with actual, positive revenue. The investors were so stunned, they forgot to ask any hard questions." },
                    { text: "A meme that gets more laughs than your product", type: 'cliche', story: "The product demo was forgettable, but a well-timed meme about startup life got a huge laugh. {name} pivoted to a meme-based consulting firm the next day." }
                ]
            },
            {
                question: "Competitor copycats you, your move?",
                options: [
                    { text: "Add “Pro” to your name, done", type: 'hacker', story: "The copycat was a problem, but {name} had a simple solution: add 'Pro' to the product name. Instantly, they were the premium option. Genius." },
                    { text: "Write a 12-tweet rant thread", type: 'hype', story: "{name} took to Twitter, unleashing a 12-part thread on the injustice of it all. It went viral, and the copycat was shamed into oblivion. A modern victory." },
                    { text: "Pivot to something random like “AI for dogs”", type: 'chaos', story: "'They can't copy us if we don't know what we're doing,' {name} declared, pivoting the entire company to 'AI for dogs.' The competitor was thoroughly confused." },
                    { text: "Offer to acquire them (with money you don’t have)", type: 'cliche', story: "In a bold power move, {name} made a public offer to acquire the competitor. The fact that they had no money was a minor detail." }
                ]
            },
            {
                question: "A major client wants changes, how do you handle it?",
                options: [
                    { text: "Promise everything, panic later", type: 'hacker', story: "'Of course we can do that!' {name} promised, with no idea how. The panic would come later. For now, the client was happy." },
                    { text: "Pretend the feature is already “in beta”", type: 'hype', story: "'That feature is actually in our exclusive beta,' {name} said smoothly, giving the client a sense of VIP treatment for a feature that didn't exist yet." },
                    { text: "Rename an existing feature and call it “custom”", type: 'chaos', story: "{name} took an old, barely-used feature, gave it a new name, and sold it as a 'custom enterprise solution.' The client was thrilled." },
                    { text: "Outsource it to your cousin again", type: 'cliche', story: "'I've got just the person for the job,' {name} said, already dialing their cousin. The legacy of Reptile.js would continue." }
                ]
            },
            {
                question: "The final boss, your exit. What happens?",
                options: [
                    { text: "IPO, parents still don’t understand what you do", type: 'hacker', story: "" },
                    { text: "Acquired by Google, shut down in 6 months", type: 'hype', story: "" },
                    { text: "Private equity, endless Excel sheets forever", type: 'chaos', story: "" },
                    { text: "Burnout, you start a podcast instead", type: 'cliche', story: "" }
                ]
            }
        ];
        
        this.initializeQuiz();
    }
    
    initializeQuiz() {
        this.currentQuestion = -1;
        this.setupEventListeners();
        document.getElementById('storySection').style.display = 'block';
        // The line hiding questionSection is now removed.
        document.getElementById('finalLegacy').style.display = 'none';
        document.getElementById('nameInputContainer').style.display = 'block';
        document.getElementById('nameInput').focus();
        document.getElementById('questionCounter').textContent = 'Question 0 of 10';
        document.getElementById('progressFill').style.width = '0%';
    }
    
    setupEventListeners() {
        document.getElementById('nextButton').addEventListener('click', () => this.nextQuestion());
        document.getElementById('restartButton').addEventListener('click', () => this.restartQuiz());
        document.getElementById('nameSubmitButton').addEventListener('click', () => this.submitName());
        document.getElementById('nameInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitName();
            }
        });
    }
    
    displayQuestion() {
        const question = this.questions[this.currentQuestion];
        document.getElementById('questionText').textContent = question.question;

        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option.text;
            button.addEventListener('click', () => this.selectOption(index, button));
            optionsContainer.appendChild(button);
        });

        document.getElementById('nextButton').disabled = true;

        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('questionCounter').textContent = `Question ${this.currentQuestion + 1} of ${this.questions.length}`;
    }
    
    selectOption(optionIndex, buttonElement) {
        document.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        buttonElement.classList.add('selected');

        const question = this.questions[this.currentQuestion];
        const answer = question.options[optionIndex];
        this.answers[this.currentQuestion] = answer;

        document.getElementById('nextButton').disabled = false;
    }
    
    
    submitName() {
        const nameInput = document.getElementById('nameInput');
        const name = nameInput.value.trim();
        if (name) {
            this.playerName = name;
            this.story.push(`Welcome, founder ${name}. You're about to embark on the chaotic journey of building a startup. Each choice you make will shape your company's fate. Will you IPO, get acquired, or flame out and start a podcast? Let's find out.`);
            this.updateStoryDisplay();
            this.currentQuestion = 0;
            document.getElementById('nameInputContainer').style.display = 'none';
            document.getElementById('questionSection').style.display = 'block';
            this.displayQuestion();
        } else {
            alert('A founder must have a name!');
        }
    }

    
    nextQuestion() {
        const answer = this.answers[this.currentQuestion];
        if (answer && answer.story) {
            this.story.push(answer.story.replace(/{name}/g, this.playerName));
            this.updateStoryDisplay();
        }

        this.currentQuestion++;
        if (this.currentQuestion < this.questions.length) {
            this.displayQuestion();
        } else {
            this.showFinalLegacy();
        }
    }
    
    updateStoryDisplay() {
        const storyText = document.getElementById('storyText');
        storyText.innerHTML = this.story.map(s => `<p>${s}</p>`).join('');
        document.getElementById('storySection').scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    showFinalLegacy() {
        // Hide quiz sections
        document.getElementById('questionSection').style.display = 'none';
        
        // Show final legacy
        const finalLegacy = document.getElementById('finalLegacy');
        finalLegacy.style.display = 'block';
        
        // Generate epic final story
        const legacyContent = this.generateFinalLegacy();
        document.getElementById('legacyContent').innerHTML = legacyContent;
        
        // Scroll to final section
        finalLegacy.scrollIntoView({ behavior: 'smooth' });
    }
    
    generateFinalLegacy() {
        const counts = this.answers.reduce((acc, answer) => {
            if (answer && answer.type) {
                acc[answer.type] = (acc[answer.type] || 0) + 1;
            }
            return acc;
        }, {});

        let dominantType = 'cliche';
        let maxCount = 0;
        for (const type in counts) {
            if (counts[type] > maxCount) {
                maxCount = counts[type];
                dominantType = type;
            }
        }

        const outcomes = {
            hacker: {
                title: "IPO: You’re a Billionaire!",
                story: `Against all odds, ${this.playerName}’s scrappy prototype, held together by duct tape and sheer force of will, actually worked. The market loved it. You’ve IPO’d. You’re rich. Your parents still don’t understand what you do, but they’re very proud. You now spend your days optimizing your smart-fridge’s kernel.`
            },
            hype: {
                title: "Acquired by Google (and Shut Down)",
                story: `The buzzwords worked! Google acquired ${this.playerName}’s startup for an eye-watering sum. You were a tech celebrity for exactly six months, before your product was unceremoniously shut down. You’re now a ‘Distinguished Engineer’ at Google, working on a project so secret, not even you know what it is.`
            },
            chaos: {
                title: "Flamed Out at Series A",
                story: `It was a wild ride for ${this.playerName}. The live demos kept crashing, the office WiFi never worked, and your lead engineer was a snake... or thought Python was one. The VCs called it ‘unscalable chaos.’ You’ve flamed out spectacularly, but at least you have a great story to tell.`
            },
            cliche: {
                title: "Burnout: You Start a Podcast",
                story: `After years of Elon quotes, beanbags, and hiring your cousin, ${this.playerName}’s startup ran out of steam. The ‘Uber for AI’ never really took off. You’ve officially burned out. You now host a moderately successful podcast about startup burnout, and your cousin is your first subscriber.`
            }
        };

        const result = outcomes[dominantType];

        return `
            <h4>${result.title}</h4>
            <p>${result.story}</p>
            <div style="text-align: center; margin-top: 20px; padding: 15px; background: rgba(0,255,65,0.1); border-radius: 10px;">
                <p style="color: #00ff41; font-weight: bold;">FOUNDER TYPE: ${dominantType.toUpperCase()}</p>
            </div>
        `;
    }
    
    restartQuiz() {
        this.currentQuestion = -1;
        this.answers = [];
        this.playerName = '';
        this.story = [];

        document.getElementById('storyText').innerHTML = '';
        document.getElementById('storySection').style.display = 'block';
        document.getElementById('questionSection').style.display = 'none';
        document.getElementById('finalLegacy').style.display = 'none';
        document.getElementById('nameInputContainer').style.display = 'block';
        document.getElementById('nameInput').value = '';
        document.getElementById('nameInput').focus();

        document.getElementById('progressFill').style.width = '0%';
        document.getElementById('questionCounter').textContent = 'Question 0 of 10';

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FounderQuiz();
});

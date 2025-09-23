class WarriorNerdQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.playerName = '';
        this.story = [];
        
        this.questions = [
            {
                question: "What is your legendary name, warrior?",
                type: 'text',
                storyResponse: "The chronicles shall forever remember the name {name}! A warrior destined for greatness, or at least, a really high score."
            },
            {
                question: "Which sacred weapon do you wield in battle?",
                options: [
                    "USB Sword of Destiny",
                    "Mechanical Keyboard +5 of Clicking Fury",
                    "Potion of Unlimited Mountain Dew",
                    "The Legendary Mouse of Precision Clicking"
                ],
                storyResponses: [
                    "With a satisfying *click*, {name} drew forth the USB Sword of Destiny! The blade hummed with the power of universal connectivity, capable of interfacing with any foe. Legend says it never needs to be flipped twice to plug in correctly.",
                    "The earth trembled as {name} unleashed the Mechanical Keyboard +5 of Clicking Fury! Each keystroke echoed like thunder across the digital plains. Enemies fled in terror at the sound of Cherry MX Blue switches being activated at 120 WPM.",
                    "{name} raised the mystical Potion of Unlimited Mountain Dew, its radioactive green glow illuminating the battlefield! With this elixir, they could code for 72 hours straight without sleep, their caffeine levels reaching legendary proportions.",
                    "Behold! {name} wielded The Legendary Mouse of Precision Clicking, its RGB lighting pulsing with the heartbeat of a true gamer! With 16,000 DPI and the reflexes of a caffeinated cat, no pixel was safe from their cursor."
                ]
            },
            {
                question: "What's your warrior-nerd battle cry?",
                options: [
                    "\"It's not a bug, it's a feature!\"",
                    "\"Have you tried turning it off and on again?\"",
                    "\"sudo make me a sandwich!\"",
                    "\"That's not how the Force works!\""
                ],
                storyResponses: [
                    "The battlefield fell silent as {name} roared their legendary cry: \"It's not a bug, it's a feature!\" Suddenly, all the glitches in reality became intentional design choices, and the universe's error log was cleared.",
                    "With the wisdom of ancient IT support, {name} bellowed: \"Have you tried turning it off and on again?\" The very fabric of space-time rebooted, fixing 90% of all existing problems in a 50-mile radius.",
                    "The ground shook as {name} commanded with root privileges: \"sudo make me a sandwich!\" The universe, recognizing their administrative authority, immediately complied by materializing the most epic sandwich ever compiled.",
                    "Drawing upon the sacred texts of a galaxy far, far away, {name} declared: \"That's not how the Force works!\" Physics itself paused to reconsider its fundamental laws, and several quantum particles filed formal complaints."
                ]
            },
            {
                question: "Which guild do you pledge your allegiance to?",
                options: [
                    "The Order of Stack Overflow",
                    "The Brotherhood of Vim Users",
                    "The Sacred Assembly of Tab vs. Spaces",
                    "The Cult of the Rubber Duck"
                ],
                storyResponses: [
                    "{name} knelt before the altar of The Order of Stack Overflow, where the ancient masters of copy-paste wisdom dwelled. They were granted the sacred ability to find solutions to problems they didn't even know they had.",
                    "The Brotherhood of Vim Users welcomed {name} with a cryptic nod. They were immediately transported to a mystical realm where exiting required ancient knowledge, and every text editor seemed primitive by comparison.",
                    "{name} entered the eternal debate hall of The Sacred Assembly of Tab vs. Spaces. The war had raged for millennia, and they would now carry the burden of this holy conflict in their very soul (and their IDE settings).",
                    "The Cult of the Rubber Duck embraced {name} with squeaky enthusiasm! They learned the ancient art of explaining problems to an inanimate object until the solution became obvious, achieving enlightenment through bath toy meditation."
                ]
            },
            {
                question: "What's your preferred method of transportation across the digital realm?",
                options: [
                    "Riding a Segway powered by cryptocurrency",
                    "Teleporting through SSH tunnels",
                    "Flying on a drone made of old graphics cards",
                    "Surfing the information superhighway on a literal surfboard"
                ],
                storyResponses: [
                    "{name} mounted their trusty Segway, its blockchain-powered engine humming with the sound of mining operations. Each mile traveled generated 0.0001 DogeCoin, making them both a warrior and an inadvertent crypto-millionaire.",
                    "With a swift 'ssh user@adventure.quest', {name} vanished into the digital ether! They materialized instantly at their destination, though they had to remember to close the connection properly or risk leaving a zombie process behind.",
                    "The majestic drone, crafted from the sacred remains of GTX 1080s, lifted {name} into the sky! Its RGB lighting created rainbow trails across the heavens, and its cooling fans generated enough lift to carry them to the cloud (computing).",
                    "{name} grabbed their literal surfboard and dove into the information superhighway! They rode the data streams like a digital Poseidon, occasionally wiping out on a 404 wave but always getting back up to surf another packet."
                ]
            },
            {
                question: "Which ancient programming language do you speak fluently?",
                options: [
                    "The Forbidden Tongue of COBOL",
                    "The Mystical Incantations of Assembly",
                    "The Arcane Dialects of JavaScript (all 47 frameworks)",
                    "The Sacred Hieroglyphs of Regular Expressions"
                ],
                storyResponses: [
                    "{name} spoke in The Forbidden Tongue of COBOL, and suddenly all the mainframes in a 100-mile radius awakened from their slumber! Banking systems everywhere trembled as they realized someone still understood their ancient ways.",
                    "Uttering the Mystical Incantations of Assembly, {name} began speaking directly to the CPU's soul! Every instruction was a prayer, every register a sacred vessel, and every bit flip a divine revelation.",
                    "{name} demonstrated mastery of the Arcane Dialects of JavaScript, seamlessly switching between React, Angular, Vue, and 44 other frameworks in a single sentence! Even the JavaScript engine wept at such beautiful chaos.",
                    "The Sacred Hieroglyphs of Regular Expressions flowed from {name}'s lips like poetry! With a single '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/', they could validate email addresses and summon ancient demons simultaneously."
                ]
            },
            {
                question: "What's your greatest fear in the digital realm?",
                options: [
                    "Merge conflicts in the repository of life",
                    "Running out of coffee during a production deployment",
                    "Accidentally deleting the master branch of reality",
                    "Getting trapped in an infinite loop of meetings"
                ],
                storyResponses: [
                    "{name} shuddered at the thought of merge conflicts in the repository of life! They had seen too many warriors fall to the dreaded 'CONFLICT (content): Merge conflict in destiny.txt' error message.",
                    "The horror! {name} broke into a cold sweat imagining a production deployment without caffeine. In their nightmares, they saw themselves trying to fix critical bugs while running on nothing but determination and stale donuts.",
                    "{name} whispered fearfully about the time they almost typed 'git branch -D master' on the universe's main repository. The backup systems were still recovering from that near-catastrophe.",
                    "The ultimate nightmare: {name} trapped in an infinite loop of meetings about meetings! Each iteration spawned two more meetings, creating a recursive hell of status updates and action items that never resolved."
                ]
            },
            {
                question: "Which legendary artifact do you seek on your quest?",
                options: [
                    "The Golden Ethernet Cable of Infinite Bandwidth",
                    "The Crystal Monitor of 8K Clarity",
                    "The Mythical SSD of Instant Boot Times",
                    "The Holy Grail of Bug-Free Code"
                ],
                storyResponses: [
                    "{name} set their sights on The Golden Ethernet Cable of Infinite Bandwidth! Legend spoke of download speeds so fast that files arrived before you even clicked the link, and lag became just a distant memory.",
                    "The quest for The Crystal Monitor of 8K Clarity began! {name} dreamed of pixels so crisp they could see individual electrons, and colors so vivid they made reality look like a low-res JPEG.",
                    "{name} sought The Mythical SSD of Instant Boot Times, rumored to make computers start faster than the speed of thought! Boot sequences would complete before the power button finished being pressed.",
                    "The ultimate prize: The Holy Grail of Bug-Free Code! {name} embarked on this impossible quest, knowing that many had tried and all had failed, but perhaps they would be the chosen one to write perfect software."
                ]
            },
            {
                question: "How do you prefer to vanquish your enemies?",
                options: [
                    "Death by a thousand paper cuts (code reviews)",
                    "Overwhelming them with superior documentation",
                    "Challenging them to a dance-off in Just Dance",
                    "Defeating them with the power of friendship and good UX design"
                ],
                storyResponses: [
                    "{name} mastered the art of death by a thousand paper cuts through meticulous code reviews! Their enemies fell not to sword or spell, but to comments like 'Consider using const instead of let here' and 'This function could be more readable.'",
                    "Behold the power of superior documentation! {name} buried their foes under avalanches of well-written README files, comprehensive API docs, and detailed inline comments. No enemy could survive such organized information.",
                    "The battlefield became a dance floor as {name} challenged all comers to Just Dance! Their enemies, unprepared for this unconventional combat style, were defeated by sick moves to 'Rasputin' and 'Gangnam Style.'",
                    "{name} wielded the most powerful force in the universe: the power of friendship and good UX design! Enemies were converted to allies through intuitive interfaces and accessible design patterns. World peace through proper button placement!"
                ]
            },
            {
                question: "What will be your legacy in the annals of geek history?",
                options: [
                    "The one who finally fixed Internet Explorer",
                    "The warrior who made printers work reliably",
                    "The legend who solved the P vs NP problem with a meme",
                    "The hero who convinced everyone to read the documentation"
                ],
                storyResponses: [
                    "The prophecies spoke of {name}, the chosen one who would finally fix Internet Explorer! Web developers across the land wept tears of joy as CSS finally rendered correctly and JavaScript stopped throwing mysterious errors.",
                    "Against all odds, {name} achieved the impossible: making printers work reliably! The ancient curse of 'PC LOAD LETTER' was broken, and paper jams became a thing of the past. Offices everywhere celebrated this miracle.",
                    "In a moment of pure genius, {name} solved the P vs NP problem using nothing but a perfectly crafted meme! The mathematical community was initially skeptical until they realized the meme was actually a valid proof disguised as humor.",
                    "The greatest achievement of all: {name} convinced everyone to actually read the documentation! This legendary feat ended 90% of all support tickets and ushered in a golden age of informed users and fewer 'RTFM' responses."
                ]
            },
            {
                question: "Your quest is over. What is your final, triumphant action?",
                options: [
                    "Deploy to production on a Friday afternoon",
                    "Announce 'It works on my machine' and ascend to a higher plane",
                    "Write a 10,000-word blog post about the 'journey'",
                    "Immediately start a New Game+"
                ],
                storyResponses: [
                    "With nerves of steel, {name} deployed to production on a Friday at 4:59 PM. The servers didn't crash. The internet didn't break. It was a display of power so absolute, it was terrifying.",
                    "Having solved all of geekdom's problems, {name} simply declared, 'It works on my machine,' and vanished into the cloud, becoming a legend whispered about in pull requests for eternity.",
                    "The quest was complete, but the content creation had just begun. {name} wrote a 10,000-word, multi-part blog series on Medium about their 'journey,' complete with affiliate links to their favorite mechanical keyboard.",
                    "The moment the credits rolled, {name} hit the 'New Game+' button. The universe reset, but this time with more challenging bugs and even more ridiculous loot. The quest for eternal geekdom never truly ends."
                ]
            }
        ];
        
        this.initializeQuiz();
    }
    
    initializeQuiz() {
        this.displayQuestion();
        this.setupEventListeners();
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
        const questionText = document.getElementById('questionText');
        const optionsContainer = document.getElementById('optionsContainer');
        const nameInputContainer = document.getElementById('nameInputContainer');
        const questionCounter = document.getElementById('questionCounter');
        const progressFill = document.getElementById('progressFill');

        // Update progress
        const progress = (this.currentQuestion / (this.questions.length -1)) * 100;
        progressFill.style.width = `${this.currentQuestion === 0 ? 0 : progress}%`;
        questionCounter.textContent = `Question ${this.currentQuestion} of ${this.questions.length - 1}`;

        // Display question
        questionText.textContent = question.question;

        if (question.type === 'text') {
            nameInputContainer.style.display = 'flex';
            optionsContainer.style.display = 'none';
            document.getElementById('nextButton').style.display = 'none';
            document.getElementById('nameInput').focus();
        } else {
            nameInputContainer.style.display = 'none';
            optionsContainer.style.display = 'grid';
            optionsContainer.innerHTML = '';
            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-button';
                button.textContent = option;
                button.addEventListener('click', () => this.selectOption(index, button));
                optionsContainer.appendChild(button);
            });
            document.getElementById('nextButton').style.display = 'none';
        }
    }
    
    selectOption(optionIndex, buttonElement) {
        // Remove previous selections
        document.querySelectorAll('.option-button').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Mark current selection
        buttonElement.classList.add('selected');
        
        // Store answer
        this.answers[this.currentQuestion] = {
            questionIndex: this.currentQuestion,
            optionIndex: optionIndex,
            optionText: this.questions[this.currentQuestion].options[optionIndex]
        };
        
        // Store player name from first question
        if (this.currentQuestion === 0) {
            this.playerName = this.extractName(this.questions[0].options[optionIndex]);
        }
        
        // Update story
        this.updateStory();
        
        // Show next button
        document.getElementById('nextButton').style.display = 'block';
    }
    
    
    submitName() {
        const nameInput = document.getElementById('nameInput');
        const name = nameInput.value.trim();
        if (name) {
            this.playerName = name;
            const storyResponse = this.questions[0].storyResponse.replace(/{name}/g, this.playerName);
            this.story.push(storyResponse);
            this.answers[0] = { questionIndex: 0, optionText: name };
            this.updateStoryDisplay();
            this.nextQuestion();
        } else {
            alert('A warrior must have a name!');
        }
    }

    updateStory() {
        const currentAnswer = this.answers[this.currentQuestion];
        const storyResponse = this.questions[this.currentQuestion].storyResponses[currentAnswer.optionIndex];
        
        // Replace {name} placeholder with player name
        const personalizedStory = storyResponse.replace(/{name}/g, this.playerName);
        
        // Add to story array
        this.story.push(personalizedStory);
        
        this.updateStoryDisplay();
    }

    updateStoryDisplay() {
        // Update story display
        const storyText = document.getElementById('storyText');
        const fullStory = this.story.join('\n\n');
        storyText.textContent = fullStory;
        
        // Scroll to show new content
        document.getElementById('storySection').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion < this.questions.length) {
            this.displayQuestion();
        } else {
            this.showFinalLegacy();
        }
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
        const weapon = this.answers[1]?.optionText || "mysterious weapon";
        const battleCry = this.answers[2]?.optionText || "ancient battle cry";
        const guild = this.answers[3]?.optionText || "secret guild";
        const transport = this.answers[4]?.optionText || "magical transport";
        const language = this.answers[5]?.optionText || "ancient language";
        const fear = this.answers[6]?.optionText || "deepest fear";
        const artifact = this.answers[7]?.optionText || "legendary artifact";
        const combat = this.answers[8]?.optionText || "unique combat style";
        const legacy = this.answers[9]?.optionText || "eternal legacy";
        const finalAction = this.answers[10]?.optionText || "final, triumphant action";
        
        return `
            <h4>🏰 The Epic Saga of ${this.playerName} 🏰</h4>
            <p>And so it was that ${this.playerName}, wielding the mighty ${weapon}, became a legend that would echo through the servers of eternity!</p>
            
            <p>Their battle cry of "${battleCry}" became the stuff of legend, whispered in hushed tones in computer labs and coding bootcamps across the digital realm. Members of ${guild} still gather annually to celebrate their heroic deeds.</p>
            
            <p>Traveling by ${transport}, ${this.playerName} journeyed to the farthest reaches of cyberspace, speaking fluently in ${language} to communicate with the ancient AIs that guarded the secrets of the universe.</p>
            
            <p>Though they feared ${fear}, our hero pressed on, driven by their quest to find ${artifact}. Their unique approach to combat - ${combat} - revolutionized warfare in the digital age and inspired countless memes.</p>
            
            <p>But perhaps most importantly, ${this.playerName} will forever be remembered as ${legacy}. This achievement transcended the boundaries between the physical and digital worlds, creating a legacy that would inspire warrior-nerds for generations to come.</p>

            <p>In their final, triumphant moment, our hero chose to ${finalAction}. It was a fitting end to a saga so epic, it probably caused a buffer overflow in the scroll of destiny.</p>
            
            <h4>⚡ The Final Chapter ⚡</h4>
            <p>As the sun set over Silicon Valley, ${this.playerName} stood atop the highest server rack, their ${weapon} gleaming in the light of a thousand LED status indicators. They had achieved what many thought impossible - they had become the ultimate Warrior Nerd.</p>
            
            <p>The Council of Eternal Geekdom bestowed upon them the highest honor: a lifetime supply of energy drinks, a mechanical keyboard that never wore out, and a monitor so large it required its own zip code.</p>
            
            <p>And though their quest was complete, ${this.playerName} knew that somewhere out there, another warrior-nerd was just beginning their journey. The cycle would continue, as it always had, in the eternal quest for geekdom.</p>
            
            <p><strong>THE END... OR IS IT JUST THE BEGINNING OF A NEW ADVENTURE?</strong></p>
            
            <div style="text-align: center; margin-top: 20px; padding: 15px; background: rgba(0,255,65,0.1); border-radius: 10px;">
                <p style="color: #00ff41; font-weight: bold;">🎮 ACHIEVEMENT UNLOCKED: ETERNAL GEEKDOM 🎮</p>
                <p style="color: #ff6b35;">You have successfully completed the Quest for Eternal Geekdom!</p>
                <p style="font-size: 0.9rem; color: #e0e0e0;">Your warrior-nerd legend will be remembered in the annals of digital history.</p>
            </div>
        `;
    }
    
    restartQuiz() {
        // Reset all variables
        this.currentQuestion = 0;
        this.answers = [];
        this.playerName = '';
        this.story = [];
        
        // Reset UI
        document.getElementById('questionSection').style.display = 'block';
        document.getElementById('finalLegacy').style.display = 'none';
        document.getElementById('storyText').textContent = "In the mystical realm of Geektopia, where WiFi signals flow like ancient magic and code compiles like sacred incantations, a new warrior-nerd is about to embark on the most epic quest ever attempted. The Council of Eternal Geekdom has summoned you to prove your worthiness...";
        
        // Start over
        this.displayQuestion();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WarriorNerdQuiz();
});

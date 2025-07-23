const stories = [
  "{name} once tried to microwave a burrito, but it turned into a time machine. Now they're stuck in the year 3025 as a space taco chef.",
  "One day, {name} challenged a goose to a dance-off... and lost. The goose is now mayor.",
  "{name} accidentally joined a squirrel mafia after giving them peanuts. It’s nuts.",
  "During a boring Zoom class, {name} discovered their cat can sing opera. Now they tour Europe together.",
  "{name} ate a mysterious jellybean and gained the power to talk to vegetables. Broccoli is very judgmental.",
  "A wizard turned {name} into a banana for 3 hours. Surprisingly, it was the best nap they ever had.",
  "In an alternate universe, {name} is a superhero whose power is perfectly folding fitted sheets. Their nemesis? The Laundry Monster.",
  "{name} once sneezed so hard they teleported into a penguin convention. They were voted cutest penguin.",
];

function generateStory() {
  const name = document.getElementById("nameInput").value || "Bob";
  const randomIndex = Math.floor(Math.random() * stories.length);
  const story = stories[randomIndex].replace("{name}", name);
  document.getElementById("storyBox").textContent = story;
}

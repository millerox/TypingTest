/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Area_1{
    
    displayRules(){
        
        var rules = "When you click 'Start Test' button, the test paragraph will appear here.\n\
                    \n\You have 1 min, timer will start automatically.";
        $("#area1").html(rules);
        
    }
    
    displayRandomText(){

    const arr = [];
    
    var str1 = "October arrived, spreading a damp chill over the grounds and into the castle. Madam Pomfrey, the nurse, was kept busy by a sudden spate of colds among the staff and students. Her Pepperup potion worked instantly, though it left the drinker smoking at the ears for several hours afterward. Ginny Weasley, who had been looking pale, was bullied into taking some by Percy. The steam pouring from under her vivid hair gave the impression that her whole head was on fire. Raindrops the size of bullets thundered on the castle windows for days on end; the lake rose, the flower beds turned into muddy streams, and Hagrid's pumpkins swelled to the size of garden sheds. Oliver Wood's enthusiasm for regular training sessions, however, was not dampened, which was why Harry was to be found, late one stormy Saturday afternoon a few days before Halloween, returning to Gryffindor Tower, drenched to the skin and splattered with mud.";
    var str2 = "Peeves was the school poltergeist, a grinning, airborne menace who lived to cause havoc and distress. Harry didn't much like Peeves, but couldn't help feeling grateful for his timing. Hopefully, whatever Peeves had done (and it sounded as though he'd wrecked something very big this time) would distract Filch from Harry. Thinking that he should probably wait for Filch to come back, Harry sank into a moth-eaten chair next to the desk. There was only one thing on it apart from his half-completed form: a large, glossy, purple envelope with silver lettering on the front. With a quick glance at the door to check that Filch wasn't on his way back, Harry picked up the envelope and read: kwikspell A Correspondence Course in Beginners' Magic";
    var str3 = "Nearly ten years had passed since the Dursleys had woken up to find their nephew on the front step, but Privet Drive had hardly changed at all. The sun rose on the same tidy front gardens and lit up the brass number four on the Dursleys' front door; it crept into their living room, which was almost exactly the same as it had been on the night when Mr. Dursley had seen that fateful news report about the owls. Only the photographs on the mantelpiece really showed how much time had passed. Ten years ago, there had been lots of pictures of what looked like a large pink beach ball wearing different-colored bonnets - but Dudley Dursley was no longer a baby, and now the photographs showed a large blond boy riding his first bicycle, on a carousel at the fair, playing a computer game with his father, being hugged and kissed by his mother. The room held no sign at all that another boy lived in the house, too. ";
    var str4 = "The hottest day of the summer so far was drawing to a close and a drowsy silence lay over the large, square houses of Privet Drive. Cars that were usually gleaming stood dusty in their drives and lawns that were once emerald green lay parched and yellowing -for the use of hosepipes had been banned due to drought. Deprived of their usual car-washing and lawn-mowing pursuits, the inhabitants of Privet Drive had retreated into the shade of their cool houses, windows thrown wide in the hope of tempting in a nonexistent breeze. The only person left outdoors was a teenage boy who was lying flat on his back in a flowerbed outside number four. He was a skinny, black-haired, bespectacled boy who had the pinched, slightly unhealthy look of someone who has grown a lot in a short space of time. His jeans were torn and dirty, his T-shirt baggy and faded, and the soles of his trainers were peeling away from the uppers.";
    var str5 = "But Aunt Marge suddenly stopped speaking. For a moment, it looked as though words had failed her. She seemed to be swelling with inexpressible anger - but the swelling didn't stop. Her great red face started to expand, her tiny eyes bulged, and her mouth stretched too tightly for speech - next second, several buttons had just burst from her tweed jacket and pinged off the walls - she was inflating like a monstrous balloon, her stomach bursting free of her tweed waistband, each of her fingers blowing up like a salami. 'MARGE!' yelled Uncle Vernon and Aunt Petunia together as Aunt Marge's whole body began to rise off her chair toward the ceiling. She was entirely round, now, like a vast life buoy with piggy eyes, and her hands and feet stuck out weirdly as she drifted up into the air, making apoplectic popping noises. Ripper came skidding into the room, barking madly. ";
    var str6 = "The villagers of Little Hangleton still called it 'the Riddle House', even though it had been many years since the Riddle family had lived there. It stood on a hill overlooking the village, some of its windows boarded, tiles missing from its roof, and ivy spreading unchecked over its face. Once a fine-looking manor, and easily the largest and grandest building for miles around, the Riddle House was now damp, derelict, and unoccupied. The Little Hangletons all agreed that the old house was creepy. Half a century ago, something strange and horrible had happened there, something that the older inhabitants of the village still liked to discuss when topics for gossip were scarce. The story had been picked over so many times, and had been embroidered in so many places, that nobody was quite sure what the truth was anymore.";
    var str7 = "On the other side of the dungeon was a long table, also covered in black velvet. They approached it eagerly but next moment had stopped in their tracks, horrified. The smell was quite disgusting. Large, rotten fish were laid on handsome silver platters; cakes, burned charcoal-black, were heaped on salvers; there was a great maggoty haggis, a slab of cheese covered in furry green mold and, in pride of place, an enormous gray cake in the shape of a tombstone, with tar-like icing forming the words, Sir Nicholas de Mimsy-Porpington died 31st October, 1492 Harry watched, amazed, as a portly ghost approached the table, crouched low, and walked through it, his mouth held wide so that it passed through one of the stinking salmon. ";
    var str8 = "An Alberta ski resort has appealed a Calgary judge's $2.1-million fine for cutting down endangered trees, arguing the sentence is grossly disproportional and demonstrably unfit. The Lake Louise Ski Resort in Banff National Park has asked a higher court to either stay the charges or reduce the penalty to $200,000. One year ago, the resort pleaded guilty to charges under the Species at Risk Act and Canada National Parks Act for cutting down a stand of trees, including 38 endangered whitebark pine, along a ski run in 2013. Last month, provincial court Judge Heather Lamoureux imposed the fine that works out to about $55,000 per tree. The maximum fine is $300,000 per tree. In a notice of appeal filed Friday, the resort argues the trial judge made palpable and overriding errors of fact and findings in absence of evidence and in interpreting mitigating and aggravating factors erroneously. ";
    var str9 = "An annual snapshot of telecom services taken for the federal government shows a year-over-year decline in Canadian wireless prices but, as usual, concludes that most G7 countries had less expensive packages. While progress is being made, prices in Canada remain expensive compared to other nations, the Department of Innovation, Science and Economic Development (ISED), which commissioned the study, said in a statement. For example, Canadian plans with two gigabytes per month of data cost an average of $75.44 per month when the 2018 survey was conducted in June and July, down from $81.61 per month in 2017. The study also compares higher and lower levels of service, but wireless plans with 2 GB of data are a good benchmark because they reflect the usage patterns of many Canadians.  ";
    var str10 = "More polls suggest Trudeau retains a personal lead over Scheer, the prime minister benefits from his incumbency and name recognition advantage. In October, Ipsos found that just 54 per cent of Canadians could name the leader of the Conservative Party of Canada (eight per cent said it was Doug Ford). The trend lines, however, should worry Trudeau. They might wobble up and down from month to month (Ipsos shows an improvement for the Liberals since October, Nanos shows the opposite) but the landscape has gotten worse for the the prime minister over the course of 2018. Trudeau's score on the question of who Canadians want as prime minister has dropped three points according to Campaign and ARI, and nine points according to Nanos, while Scheer's score has improved by between four and 12 points. That's an average swing of seven points between the Liberals and Conservatives and 13 points between Trudeau and Scheer in the last year.";
   
    arr.push(str1,str2,str3,str4,str5,str6,str7,str8,str9,str10);
    
    for(let i = 0; i < arr.length; i++)
    {
      var randomParagraph = arr[Math.floor(Math.random()*arr.length)];
    }

    $("#area1").html(randomParagraph);
    $("#area1_label").html("Test paraghraph:");
 
    }
    
    hideArea(){
        $(".area1").hide(1000);
    }
    
   getAreaContent(){
        var content = $('#area1').html();
        return content;
  }
  
}
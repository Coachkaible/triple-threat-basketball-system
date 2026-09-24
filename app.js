(() => {
  const P = {
    start:{1:[350,335],2:[28,48],3:[82,220],4:[205,300],5:[472,48]},
    slot:{1:[350,275],2:[28,48],3:[82,220],4:[205,285],5:[472,48]},
    backdoor3:{1:[350,275],2:[28,48],3:[250,95],4:[205,285],5:[472,48]},
    clear3Raise5:{1:[350,275],2:[28,48],3:[472,48],4:[205,285],5:[418,220]},
    pnr42Wing:{1:[350,275],2:[72,220],3:[472,48],4:[135,172],5:[418,220]},
    attack2roll4:{1:[350,275],2:[250,150],3:[472,48],4:[192,110],5:[418,220]},
    pass1rightslot:{1:[330,275],2:[250,150],3:[472,48],4:[192,110],5:[418,220]},
    space2corner:{1:[330,275],2:[205,285],3:[472,48],4:[28,48],5:[418,220]},
    cut5angle:{1:[330,275],2:[205,285],3:[472,48],4:[28,48],5:[300,125]},
    cornerAndLift:{1:[330,275],2:[205,285],3:[472,48],4:[82,220],5:[28,48]},
    sprint3toWing:{1:[365,172],2:[205,285],3:[418,220],4:[82,220],5:[28,48]},
    twoManAttackMiddle:{1:[312,110],2:[205,285],3:[250,145],4:[82,220],5:[28,48]},
    passOutHandlerSlot:{1:[312,110],2:[205,285],3:[330,275],4:[82,220],5:[28,48]},
    rollerReplaceCorner:{1:[472,48],2:[205,285],3:[330,275],4:[82,220],5:[28,48]},
    rot4Cut5Raise:{1:[418,220],2:[205,285],3:[330,275],4:[472,48],5:[28,48]},
    rot25PnrWing:{1:[418,220],2:[135,172],3:[330,275],4:[472,48],5:[72,220]},
    rot25AttackRoll:{1:[418,220],2:[192,110],3:[330,275],4:[472,48],5:[250,150]},
    rot25PassOut:{1:[418,220],2:[192,110],3:[330,275],4:[472,48],5:[205,285]},
    rot25RollerCorner:{1:[418,220],2:[28,48],3:[330,275],4:[472,48],5:[205,285]},
    pressureIntro:{1:[350,335],2:[28,48],3:[82,220],4:[205,338],5:[472,48]},
    pr4slotCut:{1:[350,335],2:[28,48],3:[82,220],4:[250,125],5:[472,48]},
    pr4slotFill:{1:[350,335],2:[82,220],3:[205,285],4:[28,48],5:[472,48]},
    prVAction:{1:[205,300],2:[28,48],3:[82,220],4:[350,275],5:[472,48]},
    flat:{1:[350,275],2:[28,48],3:[82,220],4:[205,285],5:[472,48]}
  };

  const pt = (x,y) => [x,y];
  const A = {
    pass:(a,b)=>({type:'pass',points:[a,b]}),
    move:(a,b)=>({type:'move',points:[a,b]}),
    path:(points)=>({type:'move',points:points}),
    dribble:(a,b)=>({type:'dribble',points:[a,b]}),
    dpath:(points)=>({type:'dribble',points:points}),
    screen:(at)=>({type:'screen',at:at}),
    x:(at)=>({type:'x',at:at}),
    breakaway:(a,b)=>({type:'dribble',points:[a,b]})
  };

  const steps = [
    {s:'SECTION 1 · BASE MOTION',t:'Starting Alignment',p:P.start,ball:1,
      notes:[['Spacing','Everyone starts outside the 3-point line.'],['Corners','2 and 5 begin deep in the corners.']],
      lesson:'1 brings the ball up. 3 is on the left wing. 4 trails toward the slot. Keep the floor wide before the first action starts.',
      rule:'STARTING SPACING: All five players begin outside the 3-point line.'},
    {s:'SECTION 1 · BASE MOTION',t:'Get the Ball to the Slot',p:P.slot,ball:4,
      notes:[['Ball to Slot','1 enters the ball to 4.'],['Trigger','This pass starts the offense.']],
      lesson:'4 raises/trails into the slot and receives the entry pass from 1.',
      rule:'START THE ACTION: Get the ball to the slot.' ,a:[A.pass(P.start[1],P.slot[4]),A.move(P.start[4],P.slot[4])]},
    {s:'SECTION 1 · BASE MOTION',t:'Read #1 — ACTION MAN Backdoor',p:P.backdoor3,ball:4,
      notes:[['Action Man','3 is the middle player on the 3-man side.'],['First Option','Hard backdoor for the layup.']],
      lesson:'The Action Man always cuts hard backdoor first. Throw the bounce pass only when the path is clearly open. If it is not open, do not force it.',
      rule:'BACKDOOR IS ALWAYS THE FIRST READ.',a:[A.move(P.slot[3],P.backdoor3[3]),A.pass(P.slot[4],P.backdoor3[3])]},
    {s:'SECTION 1 · BASE MOTION',t:'3 Clears / 5 Raises',p:P.clear3Raise5,ball:4,
      notes:[['Simultaneous','3 clears while 5 raises.'],['Spacing','3 continues to the opposite deep corner.']],
      lesson:'If the backdoor pass is not there, 3 continues through to the opposite deep corner while 5 raises from the deep right corner to the right wing.',
      rule:'CUT THROUGH AND REPLACE — DO NOT STAND.',a:[A.path([P.backdoor3[3],pt(285,75),P.clear3Raise5[3]]),A.move(P.start[5],P.clear3Raise5[5])]},
    {s:'SECTION 1 · BASE MOTION',t:'4–2 Pick & Roll on the Wing',p:P.pnr42Wing,ball:2,
      notes:[['True Wing','2 sprints to the wing outside the 3-point line.'],['Screen Angle','4 gets lower than the ballhandler.']],
      lesson:'4 passes to 2 and follows into a low-angle ball screen on the wing — not at the slot.',
      rule:'ALL TWO-MAN ACTIONS HAPPEN ON THE WING.',a:[A.move(P.start[2],P.pnr42Wing[2]),A.pass(P.slot[4],P.pnr42Wing[2]),A.move(P.slot[4],P.pnr42Wing[4]),A.screen(P.pnr42Wing[4])]},
    {s:'SECTION 1 · BASE MOTION',t:'2 Attacks Middle / 4 Seals Then Rolls',p:P.attack2roll4,ball:2,
      notes:[['Handler','Attack the middle / far side of the paint.'],['Roller','Seal outside for one full count before rolling.']],
      lesson:'For the first 1–2 seconds, 2 looks to score: rhythm jumper or all the way to the rim. If that is not there, look back to 4 before looking weak side.',
      rule:'READ ORDER: 1) SCORE  2) ROLLER  3) WEAK SIDE.',a:[A.dribble(P.pnr42Wing[2],P.attack2roll4[2]),A.move(P.pnr42Wing[4],P.attack2roll4[4])]},
    {s:'SECTION 1 · BASE MOTION',t:'Pass Out to 1 — Right Slot',p:P.pass1rightslot,ball:1,
      notes:[['Pass Out','If 2 does not score or hit the roller, pass out to 1.'],['Ball','1 receives in the right slot.']],
      lesson:'The handler gets deep enough to create an advantage, checks the roller, then passes out only when the scoring reads are covered.',
      rule:'DO NOT PASS OUT BEFORE LOOKING BACK TO THE ROLLER.',a:[A.pass(P.attack2roll4[2],P.pass1rightslot[1])]},
    {s:'SECTION 1 · BASE MOTION',t:'2 Back to Slot / 4 to Deep Corner',p:P.space2corner,ball:1,
      notes:[['Handler Replacement','2 relocates back to the slot.'],['Roller Replacement','4 goes block first, then deep corner.']],
      lesson:'After the pass-out, the ballhandler replaces to the slot. The roller finishes the roll to the ball-side block, then spaces to the deep corner.',
      rule:'ROLLER: BLOCK FIRST → THEN BALL-SIDE DEEP CORNER.',a:[A.move(P.pass1rightslot[2],P.space2corner[2]),A.path([P.attack2roll4[4],pt(150,82),P.space2corner[4]])]},
    {s:'SECTION 1 · BASE MOTION',t:'5 Cuts at a 45° Angle',p:P.cut5angle,ball:1,
      notes:[['45 Cut','5 attacks the basket at a 45° angle.'],['Read','1 can hit 5 if the scoring path is open.']],
      lesson:'The next cutter attacks hard. If the pass is not clearly there, 5 keeps moving to the far corner.',
      rule:'CUT TO SCORE. IF IT IS NOT OPEN, CLEAR THROUGH.',a:[A.move(P.space2corner[5],P.cut5angle[5]),A.pass(P.space2corner[1],P.cut5angle[5])]},
    {s:'SECTION 1 · BASE MOTION',t:'5 Reaches Far Corner / 4 Lifts',p:P.cornerAndLift,ball:1,
      notes:[['Clear','5 finishes in the far/deep corner.'],['Fill','4 lifts from the corner to the wing.']],
      lesson:'The cut creates the next open perimeter spot. 4 immediately fills it so the offense stays connected.',
      rule:'CUT AND FILL — NEVER LEAVE AN OPEN SPOT EMPTY.',a:[A.path([P.cut5angle[5],pt(225,88),P.cornerAndLift[5]]),A.move(P.space2corner[4],P.cornerAndLift[4])]},
    {s:'SECTION 1 · BASE MOTION',t:'1–3 Pick & Roll on the Wing',p:P.sprint3toWing,ball:3,
      notes:[['Right Wing','3 receives outside the 3-point line.'],['Screen','1 gets lower to create the angle.']],
      lesson:'The same two-man rules now happen on the other side: wing catch, low-angle screen, middle attack.',
      rule:'SAME ACTION — OPPOSITE SIDE.',a:[A.move(P.cornerAndLift[3],P.sprint3toWing[3]),A.pass(P.cornerAndLift[1],P.sprint3toWing[3]),A.move(P.cornerAndLift[1],P.sprint3toWing[1]),A.screen(P.sprint3toWing[1])]},
    {s:'SECTION 1 · BASE MOTION',t:'3 Attacks Middle / 1 Seals Then Rolls',p:P.twoManAttackMiddle,ball:3,
      notes:[['Handler','3 attacks middle first.'],['Roller','1 seals outside for one count, then rolls.']],
      lesson:'3 looks for the rhythm jumper or the lane first. If no score is there, 3 looks back to 1 rolling before going weak side.',
      rule:'OWN SCORE → ROLLER → WEAK SIDE.',a:[A.dribble(P.sprint3toWing[3],P.twoManAttackMiddle[3]),A.move(P.sprint3toWing[1],P.twoManAttackMiddle[1])]},
    {s:'SECTION 1 · BASE MOTION',t:'Pass Out / Handler Back to Slot',p:P.passOutHandlerSlot,ball:2,
      notes:[['Pass Out','3 passes out to 2.'],['Relocate','3 moves back to the slot.']],
      lesson:'The roller remains at the ball-side block through the pass-out. The handler relocates to the slot immediately after passing.',
      rule:'PASS OUT TO 2 — HANDLER BACK TO SLOT.',a:[A.pass(P.twoManAttackMiddle[3],P.passOutHandlerSlot[2]),A.move(P.twoManAttackMiddle[3],P.passOutHandlerSlot[3])]},
    {s:'SECTION 1 · BASE MOTION',t:'Roller Replaces to Corner',p:P.rollerReplaceCorner,ball:2,
      notes:[['Finish the Roll','1 completed the roll to the block.'],['Replace','Now 1 spaces to the ball-side deep corner.']],
      lesson:'Do not skip the block. The corner replacement happens after the roller completes the scoring roll.',
      rule:'BLOCK → THEN DEEP CORNER.',a:[A.move(P.passOutHandlerSlot[1],P.rollerReplaceCorner[1])]},
    {s:'SECTION 1 · BASE MOTION',t:'4 45-Cuts Through / 1 Lifts',p:P.rot4Cut5Raise,ball:2,
      notes:[['Next Cut','4 cuts hard at 45° looking to score.'],['Fill','1 lifts from the deep corner to the wing.']],
      lesson:'If 4 is not open, 4 continues through to the opposite deep corner while 1 fills the vacated wing.',
      rule:'THE NEXT ROTATION STARTS IMMEDIATELY.',a:[A.path([P.rollerReplaceCorner[4],pt(225,120),P.rot4Cut5Raise[4]]),A.move(P.rollerReplaceCorner[1],P.rot4Cut5Raise[1]),A.pass(P.rollerReplaceCorner[2],pt(225,120))]},
    {s:'SECTION 1 · BASE MOTION',t:'2 Passes to 5 / 2 Sets Screen',p:P.rot25PnrWing,ball:5,
      notes:[['Left Wing','5 catches on the true wing outside the line.'],['Screen','2 follows and gets lower.']],
      lesson:'2 passes to 5 and becomes the screener. The action stays on the wing with the screener below the ballhandler.',
      rule:'PASS → GET LOWER → SCREEN.',a:[A.move(P.rot4Cut5Raise[5],P.rot25PnrWing[5]),A.pass(P.rot4Cut5Raise[2],P.rot25PnrWing[5]),A.move(P.rot4Cut5Raise[2],P.rot25PnrWing[2]),A.screen(P.rot25PnrWing[2])]},
    {s:'SECTION 1 · BASE MOTION',t:'5 Attacks Middle / 2 Seals Then Rolls',p:P.rot25AttackRoll,ball:5,
      notes:[['Attack','5 attacks middle / far side of the paint.'],['Roll','2 seals outside for one count before rolling.']],
      lesson:'5 gets the first 1–2 seconds to score. If the scoring lane closes, look back to 2 rolling before looking weak side.',
      rule:'SCORE FIRST. LOOK BACK TO THE ROLLER SECOND.',a:[A.dribble(P.rot25PnrWing[5],P.rot25AttackRoll[5]),A.move(P.rot25PnrWing[2],P.rot25AttackRoll[2])]},
    {s:'SECTION 1 · BASE MOTION',t:'Pass Out / Handler Back to Slot',p:P.rot25PassOut,ball:3,
      notes:[['Pass Out','5 passes out to 3.'],['Relocate','5 returns to the slot.']],
      lesson:'The universal two-man rules repeat: attack, roller read, pass out, handler back to slot.',
      rule:'EVERYONE MUST KNOW EVERY SPOT.',a:[A.pass(P.rot25AttackRoll[5],P.rot25PassOut[3]),A.move(P.rot25AttackRoll[5],P.rot25PassOut[5])]},
    {s:'SECTION 1 · BASE MOTION',t:'2 Replaces to the Corner',p:P.rot25RollerCorner,ball:3,
      notes:[['Roller','2 finished the roll at the block.'],['Spacing','2 now replaces to the deep corner.']],
      lesson:'The roller completes the scoring roll before leaving for the corner. This resets the spacing for the next rotation.',
      rule:'FULL ROLL FIRST — CORNER SECOND.',a:[A.move(P.rot25PassOut[2],P.rot25RollerCorner[2])]},
    {s:'SECTION 1 · BASE MOTION',t:'3 Rotations in ~10 Seconds',p:P.rot25RollerCorner,ball:3,
      notes:[['Pace','Aim for three full rotations in about 10 seconds.'],['Goal','The movement should create a high-quality scoring opportunity.']],
      lesson:'Play fast without rushing. The system works because the defense must repeatedly guard hard cuts, middle attacks, rollers and spaced shooters.',
      rule:'3 ROTATIONS · ~10 SECONDS · HIGH-QUALITY SHOT.'},
    {s:'SECTION 2 · PRESSURE RELEASE',t:'SECTION 2 — Pressure Release',p:P.pressureIntro,ball:1,
      notes:[['Problem','Pressure can deny the normal perimeter pass.'],['Solution','Use automatic cut-and-fill rules instead of forcing the ball.']],
      lesson:'When a defender is anywhere close to above the 3-point line, the overplayed player must become a cutter.',
      rule:'IF THE DEFENDER IS HIGH, CUT.',a:[A.x(pt(205,305))]},
    {s:'SECTION 2 · PRESSURE RELEASE',t:'NUMBER 1 RULE — Cut and Fill',p:P.pr4slotCut,ball:1,
      notes:[['Overplay','If the defender is anywhere close to above the line, CUT.'],['Speed','The cut is full speed to the basket.']],
      lesson:'Only throw the cutter the ball when the layup path is clear. Otherwise the cutter continues through and the next player fills the open spot.',
      rule:'IF YOU ARE NOT SURE, CUT!',a:[A.x(pt(205,305)),A.move(P.pressureIntro[4],P.pr4slotCut[4]),A.pass(P.pressureIntro[1],P.pr4slotCut[4])]},
    {s:'SECTION 2 · PRESSURE RELEASE',t:'WHEEL',p:P.pr4slotFill,ball:1,
      notes:[['Wheel Call','The ballhandler can call Wheel when passes are difficult.'],['3-Man Fill','4 cuts through, 3 fills the slot, 2 fills the wing.']],
      lesson:'Wheel creates movement on the 3-man side and moves the offense side-to-side without forcing a flat pass.',
      rule:'CUT → FILL → FILL.',a:[A.path([P.pressureIntro[4],pt(250,120),P.pr4slotFill[4]]),A.move(P.pressureIntro[3],P.pr4slotFill[3]),A.move(P.pressureIntro[2],P.pr4slotFill[2])]},
    {s:'SECTION 2 · PRESSURE RELEASE',t:'Why Wheel Works',p:P.pr4slotFill,ball:1,
      notes:[['Movement','Wheel makes defenders move and communicate.'],['Passing Angles','It creates safer angles instead of forcing a straight-line pass.']],
      lesson:'The purpose is not to run a fancy pattern. The purpose is to free a teammate and shift the ball from side to side against pressure.',
      rule:'CREATE AN ANGLE — DO NOT FORCE A PASS.'},
    {s:'SECTION 2 · PRESSURE RELEASE',t:'If You Are Not Sure, CUT!',p:P.pr4slotCut,ball:1,
      notes:[['Automatic Rule','Any perimeter player can use the cut-and-fill rule.'],['Decision','Unsure whether you are overplayed? Cut.']],
      lesson:'The pressure rule applies on either side of the floor. A hard scoring cut is safer than standing and inviting a difficult pass.',
      rule:'IF YOU ARE NOT SURE, CUT!',a:[A.x(pt(205,305)),A.move(P.pressureIntro[4],P.pr4slotCut[4])]},
    {s:'SECTION 2 · PRESSURE RELEASE',t:'After Wheel — New Roles',p:P.pr4slotFill,ball:1,
      notes:[['New Slot','After 4 cuts through, 3 becomes the new slot.'],['New Action Man','2 becomes the new Action Man.']],
      lesson:'The Action Man does not move until the ball reaches the left slot. Everyone must recognize that the roles change as the floor fills.',
      rule:'AFTER WHEEL: 3 = SLOT · 2 = ACTION MAN.'},
    {s:'SECTION 2 · PRESSURE RELEASE',t:'Secondary Pressure Release — V',p:P.prVAction,ball:1,
      notes:[['V Cut','4 cuts to the middle of the free-throw line, then out to the opposite slot.'],['Ballhandler','1 dribbles to the left slot.']],
      lesson:'Use the V action especially in transition when the slots need to interchange before the defense can get fully set.',
      rule:'V: FREE-THROW-LINE MIDDLE → OPPOSITE SLOT.',a:[A.path([P.slot[4],pt(250,170),P.prVAction[4]]),A.dribble(P.start[1],P.prVAction[1])]},
    {s:'SECTION 2 · PRESSURE RELEASE',t:'Wheel & V — Side to Side',p:P.prVAction,ball:1,
      notes:[['Purpose','Both actions help move the ball side-to-side.'],['Pressure','Use movement to create the pass instead of forcing it.']],
      lesson:'Wheel changes roles through cut-and-fill. V interchanges the slots. Both give the ballhandler a safer answer to aggressive denial.',
      rule:'MOVE PEOPLE FIRST — THEN MOVE THE BALL.',a:[A.path([P.slot[4],pt(250,170),P.prVAction[4]]),A.dribble(P.start[1],P.prVAction[1])]},
    {s:'SECTION 2 · PRESSURE RELEASE',t:'Danger of the Flat Pass',p:P.flat,ball:'x',
      notes:[['Danger','A straight slot-to-slot pass is easy to jump.'],['Consequence','A steal can become an immediate layup because no one is back.']],
      lesson:'Do not force the flat pass against pressure. Use the cut-and-fill, Wheel or V action to create a better angle.',
      rule:'NO FLAT SLOT-TO-SLOT PASS AGAINST PRESSURE.',a:[A.pass(P.flat[1],P.flat[4]),A.x(pt(274,280)),A.breakaway(pt(274,280),pt(262,435))],xBall:pt(274,280)}
  ];

  const jobs = {
    1:{title:'Player 1',items:[
      'Bring the ball up under control and start outside the arc.',
      'Enter the ball to the slot to trigger the Base Motion.',
      'Later become a screener/roller in the right-side two-man action.',
      'As a ballhandler, attack the middle and use the read order: own score, roller, weak side.',
      'In the V pressure release, dribble to the left slot while the overplayed slot interchanges.'
    ]},
    2:{title:'Player 2',items:[
      'Start in the deep left corner.',
      'Sprint to the true wing outside the 3-point line for the first pick-and-roll.',
      'Attack middle as the first pick-and-roll ballhandler.',
      'After passing out, relocate back to the slot.',
      'Later become a screener/roller for 5.',
      'After Wheel, you can become the new Action Man.'
    ]},
    3:{title:'Player 3',items:[
      'Start as the Action Man — middle player on the 3-man side.',
      'Your first option is always a hard backdoor cut.',
      'If the bounce pass is not clearly open, continue through to the opposite deep corner.',
      'Later handle the right-side pick-and-roll and attack middle.',
      'After Wheel, you can become the new slot.'
    ]},
    4:{title:'Player 4',items:[
      'Trail/raise to the slot and receive the opening entry pass.',
      'Pass to 2, get lower than the ballhandler and set the first wing ball screen.',
      'Seal the defender outside for one full count before rolling.',
      'Roll fully to the ball-side block before replacing to the deep corner.',
      'If overplayed above the 3-point line, cut hard to the basket and fill.',
      'On V, cut to the middle of the free-throw line and then to the opposite slot.'
    ]},
    5:{title:'Player 5',items:[
      'Start in the deep right corner — not on the wing.',
      'Raise to the right wing when 3 clears through.',
      'Later make the 45° scoring cut and continue to the far corner if not open.',
      'Handle the third pick-and-roll from the left wing.',
      'Attack middle first, then look back to the roller before going weak side.'
    ]}
  };

  const quiz = [
    {q:'Where should all five players begin?',c:['Inside the 3-point line','Outside the 3-point line','On the free-throw line','At the blocks'],a:1,e:'All five players start outside the 3-point line, with the corner players deep.'},
    {q:'Who is the Action Man?',c:['The point guard every time','The middle player on the 3-man side','The player in the deep corner','The screener'],a:1,e:'The Action Man is the middle player on the 3-man side. Initially that is 3.'},
    {q:'What is the Action Man’s first option?',c:['Come get a handoff','Set a screen','Hard backdoor cut','Stay still'],a:2,e:'The Action Man always looks backdoor first.'},
    {q:'Where should 2 catch the ball for the first pick-and-roll?',c:['At the slot','Inside the arc','On the true wing outside the 3-point line','At the block'],a:2,e:'The two-man action is on the wing, not the slot.'},
    {q:'What is the ballhandler’s read order?',c:['Roller, own score, weak side','Own score, roller, weak side','Weak side, roller, own score','Pass out immediately'],a:1,e:'First look to score, then look back to the roller, then go weak side.'},
    {q:'How long should the screener seal outside before rolling?',c:['No wait','One full count','Five seconds','Until the ball is passed out'],a:1,e:'The screener seals outside for roughly one full count so the handler has time to look for the score.'},
    {q:'Where does the ballhandler relocate after passing out?',c:['Deep corner','Block','Back to the slot','Out of bounds'],a:2,e:'The ballhandler relocates back to the slot.'},
    {q:'Where does the roller go before replacing to the corner?',c:['Top of key','Ball-side block','Opposite slot','Half court'],a:1,e:'The roller completes the roll to the ball-side block first, then replaces to the deep corner.'},
    {q:'How quickly are we trying to complete about three rotations?',c:['About 10 seconds','About 30 seconds','One minute','There is no pace goal'],a:0,e:'The goal is roughly three rotations in about 10 seconds.'},
    {q:'What is the #1 rule against an overplay above the 3-point line?',c:['Stand still','Call timeout','Full-speed basket cut and fill','Force the pass'],a:2,e:'If the defender is high, make the full-speed basket cut and fill.'},
    {q:'What is Wheel?',c:['A post-up','A 3-man cut-and-fill pressure release','A zone defense','A dribble handoff'],a:1,e:'Wheel is the 3-man side cut-and-fill action used to create movement and passing angles.'},
    {q:'After Wheel, who becomes the new slot in our example?',c:['1','2','3','5'],a:2,e:'After 4 cuts through, 3 becomes the new slot.'},
    {q:'After Wheel, who becomes the new Action Man in our example?',c:['1','2','4','5'],a:1,e:'2 fills the wing and becomes the new Action Man.'},
    {q:'When should the new Action Man move after Wheel?',c:['Immediately','When the ball reaches the left slot','Only after a shot','Never'],a:1,e:'The Action Man waits until the ball reaches the left slot.'},
    {q:'What happens on the V pressure release?',c:['4 posts up while 1 stays still','4 cuts to the free-throw-line middle then opposite slot while 1 dribbles left','Everyone cuts at once','1 throws a flat pass to 4'],a:1,e:'The overplayed slot makes the V cut while the ballhandler dribbles to the other slot.'},
    {q:'When is V especially useful?',c:['In transition','Only after a made free throw','Only against zone','Only at the end of games'],a:0,e:'V is especially useful in transition before the defense is fully set.'},
    {q:'What is the purpose of Wheel and V?',c:['Slow the game down','Move the ball side-to-side against pressure without forcing passes','Create only 3-point shots','Keep the same players in the same spots'],a:1,e:'Both actions create movement and safer passing angles against pressure.'},
    {q:'Why is the flat slot-to-slot pass dangerous?',c:['It is always illegal','It is a straight-line pass an aggressive defender can jump for a breakaway','It is too short','It forces a shot-clock violation'],a:1,e:'A defender can jump the straight passing lane and have an immediate breakaway.'}
  ];

  const $ = (id) => document.getElementById(id);
  const panels={watch:$('watch'),jobs:$('jobs'),quiz:$('quiz')};
  const tabs={watch:$('tabWatch'),jobs:$('tabJobs'),quiz:$('tabQuiz')};
  let current=0,timer=null,jobPlayer=1,quizIndex=0,quizScore=0,answered={};

  function el(name,attrs){
    const n=document.createElementNS('http://www.w3.org/2000/svg',name);
    Object.keys(attrs||{}).forEach(k=>n.setAttribute(k,attrs[k]));
    return n;
  }
  function pathD(points){
    return points.map((p,i)=>(i===0?'M':'L')+p[0]+' '+p[1]).join(' ');
  }
  function renderCourt(step){
    const ann=$('annotationLayer'),defs=$('defenderLayer'),players=$('playerLayer'),ball=$('ballLayer');
    ann.innerHTML='';defs.innerHTML='';players.innerHTML='';ball.innerHTML='';
    (step.a||[]).forEach(item=>{
      if(item.type==='x'){
        const [x,y]=item.at;
        defs.appendChild(el('line',{x1:x-11,y1:y-11,x2:x+11,y2:y+11,class:'defender-x'}));
        defs.appendChild(el('line',{x1:x+11,y1:y-11,x2:x-11,y2:y+11,class:'defender-x'}));
      }else if(item.type==='screen'){
        const [x,y]=item.at;
        ann.appendChild(el('line',{x1:x-12,y1:y+18,x2:x+12,y2:y+18,class:'screen-mark'}));
        ann.appendChild(el('line',{x1:x-12,y1:y+12,x2:x-12,y2:y+24,class:'screen-mark'}));
      }else{
        ann.appendChild(el('path',{d:pathD(item.points),class:'annotation-'+item.type}));
      }
    });
    for(let i=1;i<=5;i++){
      const [x,y]=step.p[i];
      const g=el('g',{transform:'translate('+x+' '+y+')'});
      g.appendChild(el('circle',{r:22,class:'player-circle'}));
      const tx=el('text',{x:0,y:1,class:'player-number'});
      tx.textContent=String(i);g.appendChild(tx);players.appendChild(g);
    }
    let bx,by;
    if(step.ball==='x' && step.xBall){[bx,by]=step.xBall;}
    else {const bp=step.p[step.ball||1];bx=bp[0]+18;by=bp[1]-14;}
    ball.appendChild(el('circle',{cx:bx,cy:by,r:9,class:'ball'}));
  }
  function renderStep(animate){
    const step=steps[current];
    $('sectionName').textContent=step.s;
    $('stepCount').textContent='STEP '+(current+1)+' OF '+steps.length;
    $('stepTitle').textContent=step.t;
    $('webStatus').textContent='Step '+(current+1)+' of '+steps.length;
    const notes=$('noteCards');notes.innerHTML='';
    (step.notes||[]).forEach(n=>{
      const c=document.createElement('div');c.className='note-card';
      const t=document.createElement('div');t.className='note-title';t.textContent=n[0];
      const l=document.createElement('div');l.className='note-line';l.textContent=n[1];
      c.appendChild(t);c.appendChild(l);notes.appendChild(c);
    });
    $('lessonText').textContent=step.lesson||'';
    $('ruleText').textContent=step.rule||'';
    renderCourt(step);
    history.replaceState(null,'','#slide-'+(current+1));
    if(animate){
      const shell=$('slideShell');shell.classList.remove('animating');void shell.offsetWidth;shell.classList.add('animating');
    }
  }
  function goTo(i,animate=true){current=Math.max(0,Math.min(steps.length-1,i));renderStep(animate);}
  function pause(){if(timer)clearInterval(timer);timer=null;}
  function play(){pause();setMode('watch');const delay=Math.max(500,Number($('speedSelect').value)||20000);timer=setInterval(()=>{if(current>=steps.length-1){pause();return;}goTo(current+1);},delay);}
  function setMode(name){
    Object.keys(panels).forEach(k=>panels[k].classList.toggle('active',k===name));
    Object.keys(tabs).forEach(k=>tabs[k].classList.toggle('active',k===name));
    if(name!=='watch')pause();
    if(name==='jobs')history.replaceState(null,'','#jobs');
    if(name==='quiz')history.replaceState(null,'','#quiz');
  }

  $('prevBtn').onclick=()=>{pause();goTo(current-1)};
  $('nextBtn').onclick=()=>{pause();goTo(current+1)};
  $('playBtn').onclick=play;
  $('pauseBtn').onclick=pause;
  $('restartBtn').onclick=()=>{pause();goTo(0)};
  $('speedSelect').onchange=()=>{if(timer)play()};
  $('tabWatch').onclick=()=>{setMode('watch');renderStep(false)};
  $('tabJobs').onclick=()=>setMode('jobs');
  $('tabQuiz').onclick=()=>setMode('quiz');

  let sx=null,sy=null;
  $('slideShell').addEventListener('touchstart',e=>{if(e.touches&&e.touches[0]){sx=e.touches[0].clientX;sy=e.touches[0].clientY;}},{passive:true});
  $('slideShell').addEventListener('touchend',e=>{
    if(sx===null||!e.changedTouches||!e.changedTouches[0])return;
    const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;sx=null;sy=null;
    if(Math.abs(dx)>=42&&Math.abs(dx)>Math.abs(dy)*1.2){pause();goTo(dx<0?current+1:current-1);}
  },{passive:true});

  function renderJobs(){
    const picker=$('playerPicker');picker.innerHTML='';
    for(let i=1;i<=5;i++){
      const b=document.createElement('button');b.className='player-pick'+(i===jobPlayer?' active':'');b.textContent=i;
      b.type='button';b.onclick=()=>{jobPlayer=i;renderJobs();};picker.appendChild(b);
    }
    const j=jobs[jobPlayer],box=$('jobContent');box.innerHTML='';
    const h=document.createElement('h3');h.textContent=j.title;
    const ul=document.createElement('ul');j.items.forEach(x=>{const li=document.createElement('li');li.textContent=x;ul.appendChild(li);});
    box.appendChild(h);box.appendChild(ul);
  }

  function renderQuiz(){
    const item=quiz[quizIndex],saved=answered[quizIndex];
    $('quizHeading').textContent='Question '+(quizIndex+1)+' of '+quiz.length;
    $('quizScore').textContent='Score: '+quizScore;
    $('quizQuestion').textContent=item.q;
    const choices=$('quizChoices');choices.innerHTML='';
    item.c.forEach((choice,i)=>{
      const b=document.createElement('button');b.type='button';b.className='quiz-choice';b.textContent=choice;
      if(saved){
        if(i===item.a)b.classList.add('correct');
        else if(i===saved.choice && saved.choice!==item.a)b.classList.add('incorrect');
        b.disabled=true;
      }else b.onclick=()=>answerQuiz(i);
      choices.appendChild(b);
    });
    $('quizFeedback').textContent=saved?(saved.correct?'Correct. ':'Not quite. ')+item.e:'Choose an answer.';
    $('quizPrev').disabled=quizIndex===0;
    $('quizNext').textContent=quizIndex===quiz.length-1?'Finish':'Next ▶';
  }
  function answerQuiz(i){
    const item=quiz[quizIndex],correct=i===item.a;
    answered[quizIndex]={choice:i,correct:correct};
    if(correct)quizScore++;
    renderQuiz();
  }
  $('quizPrev').onclick=()=>{if(quizIndex>0){quizIndex--;renderQuiz();}};
  $('quizNext').onclick=()=>{
    if(quizIndex<quiz.length-1){quizIndex++;renderQuiz();}
    else $('quizFeedback').textContent='Final score: '+quizScore+' / '+quiz.length+'. Review any missed questions or restart the quiz.';
  };
  $('quizRestart').onclick=()=>{quizIndex=0;quizScore=0;answered={};renderQuiz();};

  const hash=location.hash.replace('#','');
  const m=/^slide-(\d+)$/.exec(hash);
  if(m){current=Math.max(0,Math.min(steps.length-1,Number(m[1])-1));setMode('watch');}
  else if(hash==='jobs')setMode('jobs');
  else if(hash==='quiz')setMode('quiz');
  else setMode('watch');

  renderJobs();renderQuiz();renderStep(false);
})();
import React from 'react';

function Rules() {
  return (
    <div className='Rules'>
      {/* <img src="logo" alt="loading"   /> */}
      <div id="logo-name" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <h2>This CTF has 2 Rounds</h2>
        <h3>Round 1: Qualification Round (Online)</h3>
        <ul>
          <li>First round of the CTF event is Online and window-based.</li>
          <li>This round serves as a qualifier to determine which teams or individuals will advance to the final round.</li>
          <li>Participants are presented with a variety of challenges covering different aspects of Cryptography, OSINT, and Windows Skills.</li>
          <li>The challenges may range from relatively simple tasks to more complex puzzles, with the goal of assessing participants' knowledge, problem-solving abilities, and technical skills.</li>
        </ul>
        <h3>Round 2: Final Round (Offline)</h3>
        <ul>
          <li>Final round of the CTF event is Offline and Linux-based.</li>
          <li>This round typically features more challenging and advanced tasks compared to the qualification round.</li>
          <li>Participants who qualified from the first round compete against each other to solve a new set of challenges.</li>
          <li>The challenges may be more sophisticated and require a deeper understanding of cybersecurity concepts and techniques.</li>
          <li>Every Challenge has a Number of Points associated with it.</li>
          <li>The final round often includes a time limit, and the winners are determined based on factors such as the number of flags captured, Points, and time taken to solve the challenges.</li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;

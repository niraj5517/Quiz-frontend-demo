import React,{useState} from "react";




function Coins() {

 
 
 
  return (
   
<>
    <div class="balance">
    <h1>28/100 coins left</h1>
    <h2>Recent Recharge:</h2>
    <h3><span id="value">100</span><span id="color">Bronze</span><span id="amount">50/-</span></h3>
</div>

<div class="title">
    <h1>Recharge:</h1>
</div>

<div class="rechargeTabs">
    <div class="recharge bronze">
        <div class="left">
            <h1>Bronze</h1>
            <h2>100 Coins</h2>
        </div>
        <div class="middle">
            <h1>For practice only</h1>
        </div>
        <div class="right">
            <h1>50/-</h1>
            <button>BUY</button>
        </div>
    </div>

    <div class="recharge gold">
        <div class="left">
            <h1>Gold</h1>
            <h2>200 Coins</h2>
        </div>
        <div class="middle">
            <h1>For practice <br/> and mock test</h1>
        </div>
        <div class="right">
            <h1>70/-</h1>
            <button>BUY</button>
        </div>
    </div>

    <div class="recharge platinum">
        <div class="left">
            <h1>Platinum</h1>
            <h2>300 Coins</h2>
        </div>
        <div class="middle">
            <h1>For practice <br/> and mock test</h1>
        </div>
        <div class="right">
            <h1>100/-</h1>
            <button>BUY</button>
        </div>
    </div>

    <div class="recharge bronze">
        <div class="left">
            <h1>Bronze</h1>
            <h2>100 Coins</h2>
        </div>
        <div class="middle">
            <h1>For practice only</h1>
        </div>
        <div class="right">
            <h1>50/-</h1>
            <button>BUY</button>
        </div>
    </div>

    <div class="recharge gold">
        <div class="left">
            <h1>Gold</h1>
            <h2>200 Coins</h2>
        </div>
        <div class="middle">
            <h1>For practice <br/> and mock test</h1>
        </div>
        <div class="right">
            <h1>70/-</h1>
            <button>BUY</button>
        </div>
    </div>

    <div class="recharge platinum">
        <div class="left">
            <h1>Platinum</h1>
            <h2>300 Coins</h2>
        </div>
        <div class="middle">
            <h1>For practice <br/> and mock test</h1>
        </div>
        <div class="right">
            <h1>100/-</h1>
            <button>BUY</button>
        </div>
    </div>
</div>


</>

  );
}

export default Coins;

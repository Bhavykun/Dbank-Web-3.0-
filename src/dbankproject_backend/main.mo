import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor dbankproject{
  stable var currentValue : Float = 300;
  currentValue := 300;
  Debug.print(debug_show (currentValue));

  // let id = 121434324; //constant

  stable var startTime = Time.now();
  startTime := Time.now();
  Debug.print(debug_show (startTime));

  public func topUp(amount :Float){
    currentValue+=amount;
     Debug.print(debug_show (currentValue));
  };

  public func withDraw(amount : Float){
    let diff: Float = currentValue-amount;
    if(diff>=0){
      currentValue-=amount;
    Debug.print(debug_show (currentValue));
    }
    else{
      Debug.print("Underflow");
    }
    
  };

  public query func checkBalance(): async Float{
    return currentValue;
  };

  public func compound(){
    let currentTime= Time.now();
    let timeElapsedNS = currentTime- startTime;
    let timeElapsedS = timeElapsedNS /1000000000;
    currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
  }

}

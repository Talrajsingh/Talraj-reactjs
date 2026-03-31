import { useEffect, useRef } from "react";

export default function MeteorCrash() {

  const canvasRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 400;

    let fragments = [];
    let exploded = false;
    let active = false;

    const bigMeteor = { x: 260, y: 200, r: 80 };

    const smallMeteor = {
      x: 30,
      y: 50,
      r: 15,
      vx: 2.5,
      vy: 2
    };

    function createFragments(x,y){

      fragments = [];

      for(let i=0;i<200;i++){

        fragments.push({
          x,
          y,
          r: Math.random()*3+1,
          vx:(Math.random()-0.5)*6,
          vy:(Math.random()-0.5)*6
        })

      }

    }

    function drawRock(x,y,r){

      const g = ctx.createRadialGradient(
        x-r/3,
        y-r/3,
        r/5,
        x,
        y,
        r
      )

      g.addColorStop(0,"#bbb")
      g.addColorStop(1,"#444")

      ctx.fillStyle=g

      ctx.beginPath()
      ctx.arc(x,y,r,0,Math.PI*2)
      ctx.fill()

    }

    function animate(){

      ctx.clearRect(0,0,canvas.width,canvas.height)

      if(active){

        if(!exploded){

          drawRock(bigMeteor.x,bigMeteor.y,bigMeteor.r)
          drawRock(smallMeteor.x,smallMeteor.y,smallMeteor.r)

          smallMeteor.x+=smallMeteor.vx
          smallMeteor.y+=smallMeteor.vy

          const dx=smallMeteor.x-bigMeteor.x
          const dy=smallMeteor.y-bigMeteor.y

          const dist=Math.sqrt(dx*dx+dy*dy)

          if(dist<bigMeteor.r){

            exploded=true
            createFragments(bigMeteor.x,bigMeteor.y)

          }

        }

        else{

          fragments.forEach(f=>{

            ctx.fillStyle="#888"

            ctx.beginPath()
            ctx.arc(f.x,f.y,f.r,0,Math.PI*2)
            ctx.fill()

            f.x+=f.vx
            f.y+=f.vy

          })

        }

      }

      else{

        // reverse animation (rebuild meteor)

        fragments.forEach(f=>{

          f.x += (bigMeteor.x - f.x)*0.05
          f.y += (bigMeteor.y - f.y)*0.05

          ctx.fillStyle="#888"

          ctx.beginPath()
          ctx.arc(f.x,f.y,f.r,0,Math.PI*2)
          ctx.fill()

        })

        if(fragments.length>0){

          const first = fragments[0]

          if(Math.abs(first.x-bigMeteor.x)<1){

            exploded=false
            fragments=[]
            smallMeteor.x=30
            smallMeteor.y=50

          }

        }

        drawRock(bigMeteor.x,bigMeteor.y,bigMeteor.r)

      }

      requestAnimationFrame(animate)

    }

    animate()

    // Scroll detection

    const observer=new IntersectionObserver(

      entries=>{

        entries.forEach(entry=>{

          if(entry.isIntersecting){

            active=true

          }else{

            active=false

          }

        })

      },

      {threshold:0.4}

    )

    const aboutSection=document.getElementById("about")

    if(aboutSection){

      observer.observe(aboutSection)

    }

  },[])

  return(

    <canvas
      ref={canvasRef}
      className="absolute right-10 top-32 opacity-80"
      style={{width:"380px",height:"380px"}}
    />

  )

}
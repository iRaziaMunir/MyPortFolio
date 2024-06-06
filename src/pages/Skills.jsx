import '../App.css';

const skills = () => {

  const mySkills = [
<<<<<<< Updated upstream
    {image: './Images/HtmlLogo.png',name: 'HTML'},
    {image: './Images/css2.png',name: 'CSS'},
    {image: './Images/JavaScript.png',name: 'JavaScript'},
    {image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABF1BMVEX///9uEfWGEvv///3//v94Efh/EvmKEv1tEPT///x8EvqNE/6EEPx0AOrdyPj9////+//u3PiWTuFlAOngzfm+mtr/+P+FhYX09PTiyfDPz89qAOish+B2EfT/9P+AAOqacNyOjo6bm5vb29t9AP+OE/rCwsKkpKR/f3+VlZVaAN1oC/b25P/Jycnv7++5ubmvr6/YuO2dUt1/C+FxLdulet6XV9ewjtrx2Pt8KdKifNl9GN2KWtzInexTANCmaeLAoNicd9iQYtd8Ps5zLteSRuGLN+HgufbPp/LOrPdvNtGueuZsIOLasPN7S9j57P/fze6ni9VuQ8qQPebetfZkAMVmANnsy/iSZ+OWV+mIVNG6ieiGN9AgHdrTAAAKJElEQVR4nO2cDVfaSBfHJ8xgMkAdKC0gCAgUqATFt650W7WrrnXtC93tlu2zT7//59h7ZwLykmBX2cNJen8egwnh6Py9M/fOnTthjCAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIYrWIVf8By4cLKRhnSsGPo0sa7xXOFbwJ34pzxfQpXNYHrn9QeCOTkgmpVteOZSKYgsbw9ODJ/clUQBtQREXEZhQYiqzsHxxWH/lRwu8ZsqXsNJ2jF5/AWJRcdWOWBHaCzE/VWMxOpWKpKdbWElPEp7A8HAcO7vA4LQWPSt9Rsv+ymbRjdswDxIDj2ohEYs1PkpEmjj66bnYrxwW/+/eFAaEGL1NGj5SdutVkLEpibC4jNcrzduI4bvZn6Ierbs1ykOIFmEjStsd2AnL42knCz0zQThz97XY2ZEQ04f1XyWYyOSnJtCZBnceaxCk5lvuaR2WQPamikUxKcg9NwE4c67QbETthZ6nmMjSBr876qtuyJNKPk007+VBN0Eyc7JtVN2ZJgCbJ5IPtxGjydNWNWRKoycPtRKsSIU3sZAxEeaCdRE6TuTEWRElhsOaFa94PIEQiSJOI9R0fTYydJG4tZWQn5XKQJlbU7SRmpoBr07PAxWNs9DWJrXmdZ2wkiXj5x9YEDOWZD5Oy/GiarMXKZ5sz/PzL+cVRKT6W5UfTJJV65Benpwfr58OI2wnmmAPGk0frXKetlVReOlrBBcnS+5dgKWU/v+NGQhME4ljbbvpqAppJxoXO3WNqHpPzinUv47oDzdlJBDQx83qe+xVi+wBNcAWDC1zG0LdKISQYTn9Yjj/yyxVkj1faoCUBhjC48pvvGE2gu2jTMLcygarA4aRk+cdsmytuzjKADiH7h8GaCLANXMzyTIpLHGOEHFzOdh2jifuVhT9xj0Pn2+oCTcCMrq+vT66vf/vtz/0nFYmZebh+7MSt+fmO5d7kVt2iB4Pdgb2zm0F+BzXZGK7ppa9Sp9O5WRd6tVRulHxyj+B4OplVN+mBoFsRvPIyGeiLse9sVJM6iANXYzmnfakvDt77zoud7AmHG0K8aszBizD5oaqzbAF+R6AmNkiS0CLAICrhGs+993M7juVe5CS67tCm7zmOoLlvniT+mnh2kkoYTdy/0yAjVxV/TaDzvJXoq0JrKAJ97bU3wt6pCYgCjf6YRhckBwGaOO5NBeLe8K5oYKjef5W8WxP71k7OOca1st/xm+/gobPJw7wYqKSsHNiLNZkcT6DlnTfoijk7mfc7ZhboWJ19LlloVYHB5Kza/C470X7HcrPnFbgmWe6j3xzQqOJ+2QjlGKvQvqUcnFVxuWuR38H4xNTqlDrDm+MKXpPybclvDuhZinu0jmVc4JTDZC0cq9ck6z8GSdBOFvlimcsYuoNBDjMHgrHuUdk/b2+SKO7pmzTDPhamQi6hsMrqKcxz7tIE2qUwAjO+FSc+MAgNLlzMFfj6HTAT9MjnGbBEEaoKHYVZEb0kmkwu1ATjLwhjMA7jJqxX/NPFM5NU8tck62pVfocwJkxhik4CMKOJNpQF44lXCurVgEqpxPrrTtCalweK8gcLV+iG/26pNblzPIH7tPcBMxHaNXMpxYf3rhOoiWuOH7GnhQn5/ZoozLJhaCphgJCYi4TG9o+sgDgW5UBVwE5kqBwP/K1CwXgCejQXjydY8poW6bQQQqeUMF8NQydfHybKwX3HcbOnv4ctboNQlIPfaYKVLB5PwJw+ffv8+fPV1edfH7/eetrlWAMLo8sL199OIK4DQ+lsZcBMRKh8MYYZEJ8cND1LCfY7UmIcm9JzwLKVPb0WAruE7A7h1H88cd3TfWaitjCZCmqCBeUQ2jfRHwePJxJiexsXj3ESWLbczj6mouDyV8vXTlCUyyfaRmDoCZOhYJgBgZtMn1Xt8SDr23e41iSmNQHDKLkXzIQsT7NBfudLn3tZ21ANKVwnCsCP5A6SCzUR0suf6IlxGTOuA9y2IviTAE2g4+BMB0ZxYYKb8CCMLjLzMnmnnUxo4jqdrg5uVSZAk+yxREMy+3tW3cp/D4womI61AzVhE31nTQdpDmiidzDxWU1GjvgmJ83OLxU2M9HA9E7gyqgdrAmb0aRknVbM/q/+rCa6zA/zsSx0nWYCjPAF/7O6QBOlfTEW6Jh8rOVumSCY7zvzfcct6bw9C7EmCie8svJKFwwv7DspYydx170Z6DVkwTYdv66TPdELqSJEk78ZBO5uxHXAQE3AeWx8OTwcehz90tUjKAR8l35xrDvs61l3eJG6dkK+rQbFbNo9Vf4ybPT7mQrcjp5WYOJ+VhP4xvXicG9XUfpfqvqHfnsQvL7DtCkhZtusxM2hMKScx62Z2B6/sl+xt2HAtuKm3RtlfGblKmAdEJquE2uojVbGBB4mce2zkgGamJqc0CoyArxxQI0fl6P5CsZfUu+u5piJlN0b/9xjNOqU2IK6R87VxHAphMk5g3vuXvjnY63w17N5BNc9jhMgoz36OMLK9PplPGAtI9qa+NbHinRl0P+AKery3GLGD6AJzPr+tzXN+fnfFzeXQ0ebSDnhF59EXZNU6hl8eYzL7XEDT7kcn68Z1rpEXJM13JcxuxF9clfGXN+Jvib32CMZkXp7hDSZhzSZZ3maRD1mI01Ik2nSB375k/vszbci87wCdtb02b9zr33okXmuBbuuLuFZHxiyWaeDUCfZbuHdV8nYcp5rcR76bJKHlP9vJh/ed3BZNBPiHRnTyMq3ZjPWfGjfcTvH4c5PT8C57H6LNYOfu/V9mridzXRkns+GJVmDd4epmJ2yTWYgdvscP+9xBYs0MU9ny375IKSKiiZYoCbTf7278n3c49yzHvFxj7N0hh+PuzJchdMLwVw81llVupl7g2XnuuokImMsFucIlEZBs6QHn0So28fJ4ie8x8vy0VK5rhPVFRaReTAowyWb23ZOIWcvTKCUec6uLsiXWErOQ1XBtgDsOmgsuqJvxPg9Pn3rxJvjE1wb01VJgod6/Xwa/fwKXD6GUVIY+OjBDRMmMWdFpmeZQYTrzcoR8TvjgZGPD/8S8/kwb40kCIIgCIIgCIIgCGKeYrG4i6+NVsOct/C0UWzswGthZ6eAR7gJXuCoE2oNfWfD+2D0EPlWKw8tLdaK9R6ct9s7+QYq9By1qbd6NRCjVdsDTRr54l4dP1Kr4Sfrvdbzwmr/+P8IUWsUsaG1XVYAbXbzIE8bzgt5fLfdbmhbaKNlNOqF4ja+tut4sd4Qz6NpKKLW69ULWhORL7DdGradjTQpFNs17C5Gk3w9r09aPVStXdturfAP/w8R+d0Cdpa9vUKrjqfFQn2HeZqAERV0/zCatNn2Dr7T6+HFejSNBGnX6/jvFnu1NrZ+t76NwworoCmwxvZ2EV97WpMevFvAF32+F11NCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCCKQfwDxdR/oFClSBwAAAABJRU5ErkJggg==',name: 'Bootstrap'},
    {image: './Images/tailwind.jfif',name: 'Tailwind CSS'},
    {image: './Images/react.png',name: 'React JS'},
    {image: './Images/reduxtoolkit.png',name: 'Redux Toolkit'},
    {image: './Images/wix.png',name: 'WIX'}
=======
    {image: 'public/html.jfif',name: 'HTML'},
    {image: 'public/css2.png',name: 'CSS'},
    {image: 'public/js2.png',name: 'JavaScript'},
    {image: 'dist/bootstrap3.jfif',name: 'Bootstrap'},
    {image: 'public/tailwind.jfif',name: 'Tailwind CSS'},
    {image: 'public/react.png',name: 'React JS'},
    {image: 'public/reduxtoolkit.png',name: 'Redux Toolkit'},
    {image: 'public/wix.png',name: 'WIX'}
>>>>>>> Stashed changes
  ]

  return (
    <div id='skills' className="w-full flex flex-col gap-40 items-center py-4 lg:py-40 oddSection-bg-color">
      <div className=''>
        <h2 className='text-white text-5xl'>My Skills</h2>
      </div>
      <div className='flex flex-wrap gap-12 items-center justify-center'>
        {mySkills.map((skills) =>{
          return(
            <div className=' relative flex flex-col items-center drop-shadow-lg outline  hover:outline-orange-500 rounded-md bg-slate-100 '>
              <img src={skills.image} alt="" className='rounded-md hover:scale-96 object-cover w-64 h-64 '/>
              <span className='text-yellow-500 text-xl absolute '>{skills.name}</span>
              <div className=' hover:absolute w-full h-full bg-slate-400'></div>
            </div>
            
          )
        })}
      </div>
    </div>
  );
};

export default skills;

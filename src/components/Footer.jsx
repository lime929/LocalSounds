export default function Footer() {
  return (
    <footer className="myFooter">
        <div className="footer-title">
        <div>
          <h3>Local Sounds Chicago</h3>
          <p>Bring Music, Culture and a good time to the community since 2015</p>
        </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Local Sounds Chicago. All rights
        reserved.
      </p>
      </div>
    <div className="footer-info">
            <p>
2100 W. Melvina AVE CHICAGO, IL 60618
<br />
[773] xxx-xxxx | contact@localsoundschi.com
<br />
HOURS
Open: Mon-Fri 4pm & Sat-Sun 11am
<br />
Hours: M-Th 1-9pm, Fri 3-11pm, Sat 11am-11pm, Sun 11am to 9pm
</p>
    </div>
    </footer>
  );
}

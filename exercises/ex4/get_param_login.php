<!DOCTYPE html>

<html>

<head>
    <title>Form 2</title>
</head>
<body>
        <section>
            Welcome
                    <?php
                            $un  =$_GET{"reg_un"};
                            $pw  =$_GET{"reg_pass"};
                            if($un=="rom" && $pw==1212)
                            echo "<h2> Hello ".$un. " </h2>";
                            else
                            echo "<h2> Try agian!! </h2>";
                    ?>
        </section>          
</body>
</html>
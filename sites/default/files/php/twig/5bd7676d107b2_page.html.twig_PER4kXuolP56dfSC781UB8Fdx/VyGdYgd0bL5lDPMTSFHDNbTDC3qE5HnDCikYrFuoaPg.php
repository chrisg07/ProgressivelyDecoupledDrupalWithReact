<?php

/* themes/react_simple/templates/page.html.twig */
class __TwigTemplate_9826bd013f6ac4fd04ed068cd223d0f39d93f9b998f28e88a28f21e30b73d67b extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 67);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if'),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 45
        echo "<div class=\"layout-container\">
  ";
        // line 60
        echo "  <main role=\"main\">
    <a id=\"main-content\" tabindex=\"-1\"></a>";
        // line 62
        echo "
    <div class=\"layout-content\">
      ";
        // line 64
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
        echo "
    </div>";
        // line 66
        echo "
    ";
        // line 67
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_first", array())) {
            // line 68
            echo "      <aside class=\"layout-sidebar-first\" role=\"complementary\">
        ";
            // line 69
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_first", array()), "html", null, true));
            echo "
      </aside>
    ";
        }
        // line 72
        echo "
    ";
        // line 73
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_second", array())) {
            // line 74
            echo "      <aside class=\"layout-sidebar-second\" role=\"complementary\">
        ";
            // line 75
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_second", array()), "html", null, true));
            echo "
      </aside>
    ";
        }
        // line 78
        echo "
  </main>

  ";
        // line 81
        if ($this->getAttribute(($context["page"] ?? null), "footer", array())) {
            // line 82
            echo "    <footer role=\"contentinfo\">
      ";
            // line 83
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer", array()), "html", null, true));
            echo "
    </footer>
  ";
        }
        // line 86
        echo "
</div>";
    }

    public function getTemplateName()
    {
        return "themes/react_simple/templates/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  101 => 86,  95 => 83,  92 => 82,  90 => 81,  85 => 78,  79 => 75,  76 => 74,  74 => 73,  71 => 72,  65 => 69,  62 => 68,  60 => 67,  57 => 66,  53 => 64,  49 => 62,  46 => 60,  43 => 45,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/react_simple/templates/page.html.twig", "/Users/chris.guilliams/Projects/drupalLearning/themes/react_simple/templates/page.html.twig");
    }
}

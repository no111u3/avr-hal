(function() {var implementors = {};
implementors["avr_hal_generic"] = [{"text":"impl DelayUs&lt;u16&gt; for Delay&lt;MHz24&gt;","synthetic":false,"types":[]},{"text":"impl DelayUs&lt;u16&gt; for Delay&lt;MHz20&gt;","synthetic":false,"types":[]},{"text":"impl DelayUs&lt;u16&gt; for Delay&lt;MHz16&gt;","synthetic":false,"types":[]},{"text":"impl DelayUs&lt;u16&gt; for Delay&lt;MHz12&gt;","synthetic":false,"types":[]},{"text":"impl DelayUs&lt;u16&gt; for Delay&lt;MHz8&gt;","synthetic":false,"types":[]},{"text":"impl DelayUs&lt;u16&gt; for Delay&lt;MHz1&gt;","synthetic":false,"types":[]},{"text":"impl&lt;SPEED&gt; DelayUs&lt;u8&gt; for Delay&lt;SPEED&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Delay&lt;SPEED&gt;: DelayUs&lt;u16&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;SPEED&gt; DelayUs&lt;u32&gt; for Delay&lt;SPEED&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Delay&lt;SPEED&gt;: DelayUs&lt;u16&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
package com.lynxtestapp

import android.app.Activity
import android.os.Bundle
import com.lynx.tasm.LynxBooleanOption
import com.lynx.tasm.LynxView
import com.lynx.tasm.LynxViewBuilder
import com.lynx.tasm.behavior.Behavior
import com.lynx.tasm.behavior.LynxContext
import com.lynx.xelement.XElementBehaviors
import com.lynxtestapp.providers.GenericResourceFetcher
import com.lynxtestapp.providers.TemplateProvider


class MainActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        var uri = "https://mpaas.vercel.app/assets/pokemon.lynx.bundle?fullscreen=true"
//        uri = if (BuildConfig.DEBUG == false) {
//            "http://10.63.105.81:3000/main.lynx.bundle?fullscreen=true"
//        } else {
//            "main.lynx.bundle"
//        }

        val lynxView: LynxView = buildLynxView()
        setContentView(lynxView)

        lynxView.renderTemplateUrl(uri, "")
    }
    
    private fun buildLynxView(): LynxView {
        val viewBuilder: LynxViewBuilder = LynxViewBuilder()
        viewBuilder.addBehaviors(XElementBehaviors().create())
        viewBuilder.setTemplateProvider(TemplateProvider(this))
        viewBuilder.isEnableGenericResourceFetcher = LynxBooleanOption.TRUE
        viewBuilder.setGenericResourceFetcher(GenericResourceFetcher())

        return viewBuilder.build(this)
    }
}
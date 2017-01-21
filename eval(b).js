(function ()
{
	if (0 > (new Date("2017-07-01")).getTime() - Date.now())
		C = {},
	pb("This build of WME Validator has expired. Please upgrade!");
	else if (Ya = window, Ka = Ya.Waze, Pa = Ya.W, Ta = Pa.loginManager, Wa = Pa.selectionManager, E = Pa.map, F = Pa.model, Xa = Pa.controller, Ka && Ta && Wa && E && F && Xa && $("#user-tabs"))
	{
		m(Ya.require) && (Za = Ya.require, W.map.mapState._getLayerVisibilityBitmask && (Ha = !0));
		var b = Ya._gaq;
		b && (b.push(["WME_Validator._setAccount", "UA-46853768-3"]), b.push(["WME_Validator._setDomainName", "waze.com"]), b.push(["WME_Validator._trackPageview"]));
		b = $a.toString().length;
		329630 != b ? I(3345764771, b - 329630, 1E3) : (A.Ab = !1, Ta.events.on(
			{
				loginStatus: ec,
				login: ec
			}
			), I(2730485921), A.md = function (a, b, d)
		{
			try
			{
				for (; d && " " === d.charAt(0); )
					d = d.substr(1);
				if (d)
				{
					"D" === d.charAt(0) ? (d = d.substr(1), b[2] = 1) : b[2] = 0;
					"!" === d.charAt(0) ? (d = d.substr(1), b[3] = !0) : b[3] = !1;
					"/" === d.charAt(0) && (d = d.substr(1));
					var f = "",
					n = d.match(/\/([igmy]*)$/);
					n && (f = n[1], d = d.slice(0, -n[0].length));
					b[0] = new RegExp(d, f)
				}
				else
					b[3] = !1, b[2] = 0, b[0] = null
			}
			catch (l)
			{
				pb(Sb("err.regexp",
					{
						n: a
					}
					) + "\n\n" + l),
				b[3] = !1,
				b[2] = 0,
				b[0] = null
			}
		}, A.ob = function (a)
		{
			this.G = this.Uc = 0;
			this.Aa = this.T = "";
			this.ka = 0;
			this.da = "";
			if (a)
			{
				this.G = a;
				if (a = F.cities.get(a))
				{
					this.T = a.attributes.isEmpty ? "" : a.attributes.name;
					var b = F.states.get(a.attributes.stateID);
					b && (this.Aa = b.name);
					this.ka = a.attributes.countryID;
					if (b = F.countries.get(a.attributes.countryID))
						this.da = b.name
				}
				this.Uc = this.G + this.ka;
				Object.defineProperties(this,
				{
					Uc:
					{
						writable: !1
					},
					G:
					{
						writable: !1
					},
					Aa:
					{
						writable: !1
					},
					ka:
					{
						writable: !1
					},
					da:
					{
						writable: !1
					}
				}
				)
			}
		}, A.ob.prototype.d = function (a)
		{
			if (!x.gb)
				return !1;
			var b = x.v[a];
			b.td || (b.td = {}
			);
			a = b.td;
			var d = b.ec,
			f = d ? this.Uc : this.ka;
			if (f in a)
				return a[f];
			a[f] = !1;
			var n = b.gc;
			if (n && n > x.U.Od)
				return !1;
			if (d)
			{
				var l = this.T.toUpperCase();
				if (!A.ab(d, function (a)
					{
						return a.toUpperCase() === l
					}
					))
					return !1
			}
			if (d = b.Rd)
			{
				var B = x.U.lb.toUpperCase();
				if (!A.ab(d, function (a)
					{
						return a.toUpperCase() === B
					}
					))
					return !1
			}
			if (b = b.mb)
			{
				var r = this.da.toUpperCase();
				if (!A.ab(b, function (a)
					{
						if (a in Ec)
							return Ec[a] === r;
						pb("Please report: fc=" + a);
						return !1
					}
					))
					return !1
			}
			return a[f] = !0
		}, A.Kb = function (a)
		{
			this.Ba = 0;
			this.M = "";
			a && (this.Ba = a, (a = F.streets.get(a)) ? (this.M = a.isEmpty ? "" : a.name, A.ob.call(this, a.cityID)) : (this.M = "No ID", A.ob.call(this, 0)));
			Object.defineProperties(this,
			{
				Ba:
				{
					writable: !1
				}
			}
			)
		}, A.Kb.prototype = new A.ob, A.Kb.prototype.constructor = A.Kb)
	}
	else
		kb("waiting for WME..."), I(666307205, null, 1E3)
}
)

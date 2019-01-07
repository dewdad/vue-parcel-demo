<template>
	<div id="app">
		<div id="nav">
		<b-navbar toggleable="md" variant="info" type="dark">

			<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

			 <b-navbar-brand href="#">Bootstrap Vue</b-navbar-brand>
				
			<b-collapse is-nav id="nav_collapse">
				<b-navbar-nav>
				<b-nav-item to="/">Home</b-nav-item>
				<b-nav-item to="/trix">Trix Editor</b-nav-item>
				<b-nav-item to="/about">About</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>

		<br />

		<b-container>
			<router-view/>
		</b-container>
		</div>
	</div>
</template>




<%
include ../common/libs
include ../common/sidebar
%>
            <div class="col-sm-10" style="width:auto;">
                <div class="main">
                    <h1 style="font-size: 40px;">Search</h1>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="col-sm-10" style="border-bottom: 2px solid #000;">
                                <i class="fa fa-search" style="font-size:16px;margin-left:-30px"></i> <input type="text"
                                                                                                             class="search">
                            </div>
                        </div>
                    </div>
                    <br><br><br>
                    <%- include(rootPath + 'layouts/user/sidebarfooter'); %>
                </div>
            </div>
</body>
</html>



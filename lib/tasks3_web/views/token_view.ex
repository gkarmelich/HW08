# From Nat's lecture notes.

defmodule Tasks3Web.TokenView do
  use Tasks3Web, :view

  def render("token.json", %{user: user, token: token}) do
    %{
      user_id: user.id,
      user_name: user.name,
      token: token
    }
  end
end
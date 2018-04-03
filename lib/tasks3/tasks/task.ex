defmodule Tasks3.Tasks.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :completed, :boolean, default: false
    field :description, :string
    field :time_spent, :integer, default: 0
    field :title, :string
    belongs_to :user, Tasks3.Users.User
    belongs_to :creator, Tasks3.Users.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :description, :completed, :time_spent, :user_id, :creator_id])
    |> validate_required([:title, :description, :completed, :user_id, :creator_id])
  end

end

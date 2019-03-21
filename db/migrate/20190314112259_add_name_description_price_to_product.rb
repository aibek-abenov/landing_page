class AddNameDescriptionPriceToProduct < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :name, :string
    add_column :products, :description, :text
    add_column :products, :price, :decimal
  end
end

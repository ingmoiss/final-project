"""empty message

Revision ID: 5ad4459cf218
Revises: c56dc70e6343
Create Date: 2021-03-10 22:12:37.448925

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5ad4459cf218'
down_revision = 'c56dc70e6343'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('cats', 'cat_type')
    op.drop_column('dogs', 'dog_type')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('dogs', sa.Column('dog_type', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.add_column('cats', sa.Column('cat_type', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    # ### end Alembic commands ###

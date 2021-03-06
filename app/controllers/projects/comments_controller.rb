class Projects::CommentsController < ProjectsController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :set_project, only: [:show, :update, :destroy, :create]
  skip_before_filter :verify_authenticity_token, only: [:update]
  before_action :authorize
  # GET /users
  def index

  end

  # GET /users/1
  def show
    redirect_to comment.widget.project
  end

  # POST /users
  def create
    @comment = ProjectComment.new(comment_params)
    @comment.user = current_user
    @comment.project = @project
    @project.comments << @comment
    if comment_params[:reply_to_id]
      comment_dad = ProjectComment.find(comment_params[:reply_to_id])
      comment_dad.replies << @comment
    end

    respond_to do |format|
      if @comment.save
        flash.now[:notice] = "Comment was successfully saved."
        format.js
        format.html

      end
    end
  end

  # PATCH/PUT /users/1
  def update
    if @comment.update_attributes(comment_params)
      respond_to do |format|
        format.json { render :json => { :status => 'Ok', :message => 'Received'}, :status => 200 }
      end
    else
      render :edit
    end
  end

  # DELETE /users/1
  def destroy
    @comment.destroy
    redirect_to @project, notice: 'Widget?(comment) was successfully destroyed.'
  end


  private
  # Only allow a trusted parameter "white list" through.
  def comment_params
    params.require(:comment).permit!
  end

  def set_comment
    @comment = ProjectComment.find(params[:id])
  end
  def set_project
    @project = Project.find(params[:project_id])
  end
end
